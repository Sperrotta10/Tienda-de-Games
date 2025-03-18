from datetime import datetime
from sqlmodel import SQLModel, Field, Relationship
from typing import List, Optional

class Biblioteca(SQLModel, table=True):
    __tablename__ = "biblioteca"

    usuario_id: str = Field(primary_key=True, index=True)  # Un usuario tiene solo una biblioteca
    juegos: List["BibliotecaJuegos"] = Relationship(back_populates="biblioteca")

class BibliotecaJuegos(SQLModel, table=True):
    __tablename__ = "biblioteca_juegos"

    id: Optional[int] = Field(default=None, primary_key=True)
    usuario_id: str = Field(foreign_key="biblioteca.usuario_id")
    juego_id: str
    titulo: str
    fecha_compra: datetime = Field(default_factory=datetime.utcnow)

    biblioteca: Optional[Biblioteca] = Relationship(back_populates="juegos")
