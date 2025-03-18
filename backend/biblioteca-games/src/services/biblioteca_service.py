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

def add_juego(session: SessionDep, usuario_id: int, juego: BibliotecaJuegos):
    biblioteca = session.get(Biblioteca, usuario_id)
    
    if not biblioteca:
        # Si la biblioteca no existe, la creamos automáticamente
        biblioteca = Biblioteca(usuario_id=usuario_id, juegos=[])
        session.add(biblioteca)
        session.commit()
        session.refresh(biblioteca)

    # Asociar el juego a la biblioteca
    juego.usuario_id = usuario_id
    session.add(juego)
    session.commit()
    session.refresh(juego)

    return juego
