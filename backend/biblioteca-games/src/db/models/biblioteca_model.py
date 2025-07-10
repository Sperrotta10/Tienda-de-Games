from sqlmodel import SQLModel, Field, Relationship, UniqueConstraint
from sqlalchemy.orm import relationship  # 🔹 Importa esta función de SQLAlchemy
from typing import List, Optional

class Biblioteca(SQLModel, table=True):
    __tablename__ = "biblioteca"

    usuario_id: int = Field(primary_key=True, index=True)
    juegos: List["BibliotecaJuegos"] = Relationship(
        back_populates="biblioteca",
        sa_relationship=relationship("BibliotecaJuegos", lazy="joined")  # 🔹 Carga la relación automáticamente
    )

class BibliotecaJuegos(SQLModel, table=True):
    __tablename__ = "biblioteca_juegos"
    __table_args__ = (UniqueConstraint('usuario_id', 'juego_id', name="uq_usuario_juego"),)

    id: Optional[int] = Field(default=None, primary_key=True)
    usuario_id: int = Field(foreign_key="biblioteca.usuario_id")
    juego_id: int
    titulo: str

    biblioteca: Optional[Biblioteca] = Relationship(back_populates="juegos")
