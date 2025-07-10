from pydantic import BaseModel, validator
from typing import List

class JuegoPedido(BaseModel):
    titulo: str
    juego_id: str  # O int, según corresponda

class PedidoSchema(BaseModel):
    status_pedido: str
    juegos: List[JuegoPedido]

    @validator('status_pedido')
    def validar_status(cls, v):
        if v not in ("aceptado", "pendiente", "cancelado"):
            raise ValueError("status_pedido debe ser uno de: aceptado, pendiente, cancelado")
        return v
