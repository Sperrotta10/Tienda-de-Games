"use client";
import { useState, useMemo } from "react";
import estilos from "../../Styles/Carrito-Compras/Carrito.module.css";
import ItemCarrito from "../../Components/Carrito-Compras/ItemCarrito";
import ProtectedRoute from "@/utils/ProtectedRoute";

export default function ShoppingCart() {
    const [currentItems, setCurrentItems] = useState([
        { id: 1, gameName: "Fifa 25", imageSrc: "fifa25_horizontal.jpeg", price: 59.99 },
        { id: 2, gameName: "Monster Hunter Wilds", imageSrc: "mh_wilds.webp", price: 69.99 },
        { id: 3, gameName: "Mortal Kombat 1", imageSrc: "Mortal_Kombat_1.webp", price: 49.99 },
        { id: 4, gameName: "Lol", imageSrc: "lol.png", price: 22.00 },
        { id: 5, gameName: "Dragon Ball", imageSrc: "kokun.png", price: 39.99 },
        { id: 6, gameName: "El bicho", imageSrc: "siuu.jpeg", price: 9.99 },
    ]);

    // 🛒 Función para eliminar un juego del carrito
    const removeItem = (id) => {
        setCurrentItems(currentItems.filter(item => item.id !== id));
    };

    // 📊 Calcular el total de los precios
    const totalPrice = useMemo(() => 
        currentItems.reduce((acc, item) => acc + item.price, 0).toFixed(2),
    [currentItems]);

    return (
        <div className={estilos.general_container}>
            <h1 className={estilos.title}>Carrito de Compras</h1> 
            <div className={estilos.carrito_container}>
                <div className={estilos.left_side}>
                    {currentItems.map((item) => (
                        <ItemCarrito 
                            key={item.id} 
                            gameName={item.gameName} 
                            price={item.price}
                            imageSrc={item.imageSrc} 
                            onRemove={() => removeItem(item.id)} // ✅ Pasamos la función
                        />
                    ))}  
                </div>
                <div className={estilos.right_side}>
                    <h2 className={estilos.total}>Total</h2>
                    <div className={estilos.total_container}>
                        <p>Total Estimado: ${totalPrice}</p>
                        <p style={{ fontSize: "14px", color: "var(--color-light-gray)" }}>
                            Los impuestos de venta se calcularán durante el pago (si es aplicable)
                        </p>
                    </div>
                    <button className={estilos.checkout_button}>Continuar con el pago</button>
                </div>
            </div>       
        </div>
    );
}
