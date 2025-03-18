from fastapi import HTTPException, status
from src.db.database import SessionDep
from src.db.models.biblioteca_model import Biblioteca, BibliotecaJuegos

def get_biblioteca(session: SessionDep, usuario_id: int):
    biblioteca = session.get(Biblioteca, usuario_id)
    
    if not biblioteca:
        # Crear una nueva biblioteca para el usuario
        nueva_biblioteca = Biblioteca(usuario_id=usuario_id, juegos=[])
        session.add(nueva_biblioteca)
        session.commit()
        session.refresh(nueva_biblioteca)
        print(f"hola esto es:{nueva_biblioteca}")
        return nueva_biblioteca

    return biblioteca

def get_juego(session: SessionDep, usuario_id: int, juego_id: int):
    juego = session.query(BibliotecaJuegos).filter_by(usuario_id=usuario_id, juego_id=juego_id).first()
    
    if not juego:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Juego no encontrado")
    
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
