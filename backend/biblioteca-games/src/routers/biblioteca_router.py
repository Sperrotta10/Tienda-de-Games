from fastapi import APIRouter, Depends, HTTPException, status
from src.db.database import SessionDep
from src.db.models.biblioteca_model import Biblioteca, BibliotecaJuegos
from src.services.biblioteca_service import get_biblioteca, get_juego, add_juego

router = APIRouter(tags=["Biblioteca"])

@router.get("/{usuario_id}", response_model=Biblioteca)
def biblioteca(usuario_id: int, session: SessionDep):
    return get_biblioteca(session, usuario_id)

@router.get("/{usuario_id}/juegos/{juego_id}", response_model=BibliotecaJuegos)
def juego(usuario_id: int, juego_id: int, session: SessionDep):
    return get_juego(session, usuario_id, juego_id)

@router.post("/{usuario_id}/", response_model=BibliotecaJuegos)
def agregar_juego(usuario_id: int, juego: BibliotecaJuegos, session: SessionDep):
    return add_juego(session, usuario_id, juego)
