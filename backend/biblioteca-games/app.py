from fastapi import FastAPI 
from src.db.database import engine
from src.db.models.biblioteca_model import SQLModel
from src.routers.biblioteca_router import router as biblioteca_router

print("Hello World")

app = FastAPI()
# Incluir el router de biblioteca
app.include_router(biblioteca_router)

@app.get("/")
def index():
    return {"Hello": "World"}

print("⏳ Creando base de datos...")
SQLModel.metadata.create_all(engine)
print("✅ Base de datos creada correctamente.")

print("Hola")