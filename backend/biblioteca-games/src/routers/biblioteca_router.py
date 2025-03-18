from typing import Optional
from fastapi import APIRouter, HTTPException, Query, status
from sqlmodel import select
from db.models.biblioteca_model import Biblioteca, BibliotecaJuegos
from db import SessionDep

router = APIRouter()

# EndPoints de la biblioteca del usuario

@router.get(
        "/{usuario_id}", 
        response_model=Biblioteca, 
        status_code=status.HTTP_200_OK,
        tags=["Biblioteca"], 
        )
def hello_world():
    return {"message": "Hello, world!"}

@router.get(
        "/{usuario_id}/juegos/{juego_id}", 
        response_model=BibliotecaJuegos, 
        status_code=status.HTTP_200_OK,
        tags=["Biblioteca"], 
        )
def hello_world():
    return {"message": "Hello, world!"}

# Juegos de la bilioteca de un usuario

@router.post(
        "/{usuario_id}/",
        response_model=list[BibliotecaJuegos], 
        status_code=status.HTTP_200_OK,
        tags=["BibliotecaJuegos"], 
        )
def hello_world():
    return {"message": "Hello, world!"}

@router.get(
        "/{usuario_id}/juegos/{juego_id}", 
        response_model=BibliotecaJuegos, 
        status_code=status.HTTP_200_OK,
        tags=["BibliotecaJuegos"], 
        )
def hello_world():
    return {"message": "Hello, world!"}




# async def create_customer(customer_data: CustomerCreate, session: SessionDep):
#     customer = Customer.model_validate(customer_data.model_dump())
#     session.add(customer)
#     session.commit()
#     session.refresh(customer)
#     return customer

# @router.get("/customers", response_model=list[Customer], tags=["Customers"])
# async def list_customer(session: SessionDep):
#     return session.exec(select(Customer)).all()

# @router.get("/customers/{id_customer}", response_model=Customer, tags=["Customers"])
# async def get_customer(id_customer: int, session: SessionDep):
#     try:
#         # customer = session.exec(select(Customer).where(Customer.id == id_customer)).first()
#         customer = session.get(Customer, id_customer)
#         if customer is None:
#             raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Customer not found")
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))
#     return customer

# @router.delete("/customers/{id_customer}", tags=["Customers"])
# async def delete_customer(id_customer: int, session: SessionDep):
#     try:
#         # customer = session.exec(select(Customer).where(Customer.id == id_customer)).first()
#         customer = session.get(Customer, id_customer)
#         if customer is None:
#             raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Customer not found")
#         session.delete(customer)
#         session.commit()
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))
#     return {"detail": "ok"}

# @router.patch("/customers/{id_customer}",
#             response_model=Customer, 
#             status_code=status.HTTP_201_CREATED, 
#             tags=["Customers"])
# async def edit_customer(customer_data: CustomerUpdate, id_customer: int, session: SessionDep):
#     customer = session.get(Customer, id_customer)
#     if customer is None:
#             raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Customer not found")
#     update_data = customer_data.model_dump(exclude_unset=True)
#     customer.sqlmodel_update(update_data)
#     session.add(customer)
#     session.commit()
#     session.refresh(customer)
#     return customer

# @router.post("/customers/{customer_id}/plans/{plan_id}", response_model=CustomerPlan, tags=["Customers and Plans"])
# async def subscribe_customer_to_plan(session: SessionDep, customer_id: int, plan_id: int, plan_status: StatusEnum = Query()):
#     customer_db = session.get(Customer, customer_id)
#     plan_db = session.get(Plan, plan_id)

#     if not customer_db or not plan_db:
#         object_status = "Customer" if not customer_db else "Plan"
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"{object_status} doesn't exist")
    
#     customer_plan_db = CustomerPlan(plan_id=plan_db.id, 
#                                     customer_id=customer_db.id, 
#                                     status=plan_status
#                                     )
#     session.add(customer_plan_db)
#     session.commit()
#     session.refresh(customer_plan_db)
#     return customer_plan_db

# @router.get("/customers/{customer_id}/plans", response_model=list[Plan], tags=["Customers and Plans"])
# async def list_customerPlan_status(customer_id:int, session: SessionDep, plan_status: Optional[StatusEnum] = Query(None)):
#     customer_db = session.get(Customer, customer_id)
#     if not customer_db:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Customer doesn't exist")
    
#     query = (
#         select(Plan)
#         .where(CustomerPlan.customer_id == customer_id)
#     )
#     if plan_status:
#         query = query.where(CustomerPlan.status == plan_status)
#     plans_db = session.exec(query).all()
#     return plans_db

