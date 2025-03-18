from fastapi import FastAPI
from pydantic import BaseModel

class Biblioteca(BaseModel):
    usuario_id: str
    plataforma: str
    genero: str
    preco: float