import os
from sqlmodel import SQLModel, create_engine, Session
from dotenv import load_dotenv

# Cargar variables de entorno desde el archivo .env
load_dotenv()

# Obtener la URL de la base de datos
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./biblioteca.db")

if not DATABASE_URL:
    raise ValueError("❌ ERROR: DATABASE_URL no está definido en el archivo .env")

# Crear el motor de la base de datos
engine = create_engine(DATABASE_URL, echo=True)

# Dependencia para obtener una sesión de base de datos
def get_session():
    with Session(engine) as session:
        yield session
