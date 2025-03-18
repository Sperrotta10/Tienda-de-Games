from fastapi import HTTPException, status
from src.db.database import SessionDep
from src.db.models.biblioteca_model import Biblioteca, BibliotecaJuegos
from sqlalchemy.orm import joinedload  # 🔹 Importarlo desde SQLAlchemy
from sqlmodel import select


def get_biblioteca(session: SessionDep, usuario_id: int):
    # Asegurar que se cargan los juegos junto con la biblioteca
    biblioteca = session.get(Biblioteca, usuario_id)    

    if not biblioteca:
        biblioteca = Biblioteca(usuario_id=usuario_id, juegos=[])
        session.add(biblioteca)
        session.commit()
        session.refresh(biblioteca)

    return {
        "usuario_id": biblioteca.usuario_id,
        "juegos": biblioteca.juegos  # 🔹 Si no hay juegos, retorna una lista vacía
    }


def get_juego(session: SessionDep, usuario_id: int, juego_id: int):
    # Consultar el juego filtrando por usuario_id y juego_id
    stmt = select(BibliotecaJuegos).where(
        BibliotecaJuegos.usuario_id == usuario_id,
        BibliotecaJuegos.juego_id == juego_id
    )
    juego = session.exec(stmt).first()

    if not juego:
        raise HTTPException(status_code=404, detail="Juego no encontrado")

    return juego

def add_juegos(session: SessionDep, usuario_id: int, juegos: list[BibliotecaJuegos]):
    # 1. Validar duplicados en la solicitud
    ids_juegos_solicitud = [j.juego_id for j in juegos]
    
    # Si hay IDs repetidos en el mismo request
    if len(ids_juegos_solicitud) != len(set(ids_juegos_solicitud)):
        duplicados = {x for x in ids_juegos_solicitud if ids_juegos_solicitud.count(x) > 1}
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Error: Juego IDs duplicados en la solicitud: {duplicados}"
        )

    # 2. Validar juegos ya existentes en la base de datos
    stmt_existentes = select(BibliotecaJuegos).where(
        BibliotecaJuegos.usuario_id == usuario_id,
        BibliotecaJuegos.juego_id.in_(ids_juegos_solicitud)
    )
    juegos_existentes = session.exec(stmt_existentes).all()
    
    if juegos_existentes:
        ids_existentes = {j.juego_id for j in juegos_existentes}
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Error: Juegos ya existen en la biblioteca (IDs: {ids_existentes})"
        )

    # 3. Crear biblioteca si no existe (esto va DESPUÉS de las validaciones)
    biblioteca = session.get(Biblioteca, usuario_id)
    if not biblioteca:
        biblioteca = Biblioteca(usuario_id=usuario_id)
        session.add(biblioteca)
        session.commit()
        session.refresh(biblioteca)

    # 4. Insertar nuevos juegos
    nuevos_juegos = []
    for juego in juegos:
        nuevo_juego = BibliotecaJuegos(
            titulo=juego.titulo,
            juego_id=juego.juego_id,
            usuario_id=usuario_id
        )
        session.add(nuevo_juego)
        nuevos_juegos.append(nuevo_juego)
    
    # 5. Commit único para mejor performance
    session.commit()

    # 6. Refrescar objetos (opcional, solo si necesitas datos post-insert)
    for juego in nuevos_juegos:
        session.refresh(juego)
        
    return nuevos_juegos
