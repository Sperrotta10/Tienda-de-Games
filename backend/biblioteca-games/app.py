from fastapi import FastAPI 
from src.db.database import engine
from src.db.models.biblioteca_model import SQLModel

print("Hello World")

app = FastAPI()

@app.get("/")
def index():
    return {"Hello": "World"}

print("⏳ Creando base de datos...")
SQLModel.metadata.create_all(engine)
print("✅ Base de datos creada correctamente.")

print("Hola")