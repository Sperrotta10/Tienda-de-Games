import os
from sqlmodel import Session, create_engine, SQLModel
from fastapi import Depends
from dotenv import load_dotenv
from typing import Annotated

# Cargar variables de entorno
load_dotenv()

# Configuración de la base de datos
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./biblioteca.db")

if not DATABASE_URL:
    raise ValueError("❌ ERROR: DATABASE_URL no está definido en el archivo .env")

engine = create_engine(DATABASE_URL, echo=True)

# Dependencia para obtener una sesión de base de datos
def get_session():
    with Session(engine) as session:
        yield session

SessionDep = Annotated[Session, Depends(get_session)]
