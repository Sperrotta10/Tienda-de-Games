"use client";
import { useState, useMemo, useContext, useEffect } from "react";
import estilos from "../../Styles/Carrito-Compras/Carrito.module.css";
import ItemCarrito from "../../Components/Carrito-Compras/ItemCarrito";
import ProtectedRoute from "@/utils/ProtectedRoute";
import { AuthContext } from "../../utils/AuthContext";

export default function ShoppingCart() {
  const [currentItems, setCurrentItems] = useState([]);
  const { login, print, auth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!auth.userId) return; // ⛔ Evitar la ejecución si `userId` es null/undefined

    async function fetchItems() {
      setLoading(true); // 🔄 Mostrar carga al iniciar la petición
      try {
        const response = await fetch(`http://localhost:81/api/carrito-compras/${auth.userId}`);

        if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`);

        const data = await response.json();
        setCurrentItems(data.items);
        console.log(data.items)
      } catch (error) {
        console.error("Error al obtener los items:", error);
        setError(error.message);
      } finally {
        setLoading(false); // 🔄 Ocultar carga al finalizar
      }
    }

    fetchItems();
  }, [auth.userId]); // 🔄 Se ejecuta cada vez que `auth.userId` cambie

  // 🛒 Función para eliminar un juego del carrito
    
    async function removeItemFromCart(itemID) {
      try {
        setCurrentItems(currentItems.filter((item) => item.id !== itemID));
        const response = await fetch(`http://localhost:81/api/carrito-compras/${auth.userId}/items/${itemID}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
    
        if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`);
    
        console.log("Juego eliminado del carrito");
      } catch (error) {
        console.error("Error al eliminar el juego del carrito:", error);
      }
    }
    

  // 📊 Calcular el total de los precios
  const totalPrice = useMemo(
    () => currentItems.reduce((acc, item) => acc + item.precio_unitario, 0).toFixed(2),
    [currentItems]
  );

  if (loading) return <p>🔄 Cargando juego...</p>;
  if (error) return <p>❌ Error: {error}</p>;

  return (
    <ProtectedRoute>
      <div className={estilos.general_container}>
        <h1 className={estilos.title}>Carrito de Compras</h1>
        <div className={estilos.carrito_container}>
          <div className={estilos.left_side}>
            {currentItems.map((item) => (
              <ItemCarrito
                key={item.juego_id}
                gameName={item.titulo}
                price={item.precio_unitario}
                onRemove={() => removeItemFromCart(item.id)}
              />
            ))}
          </div>
          <div className={estilos.right_side}>
            <h2 className={estilos.total}>Total</h2>
            <div className={estilos.total_container}>
              <p>Total Estimado: ${totalPrice}</p>
              <p style={{ fontSize: "14px", color: "var(--color-light-gray)" }}>
                Los impuestos de venta se calcularán durante el pago (si es
                aplicable)
              </p>
            </div>
            <button className={estilos.checkout_button}>
              Pagar
            </button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
