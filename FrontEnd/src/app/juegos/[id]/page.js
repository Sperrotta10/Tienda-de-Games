"use client";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import styles from "@/Styles/juegos.module.css";
import Image from "next/image";
import { AuthContext } from "../../../utils/AuthContext";

export default function JuegoDetalle() {
  const router = useRouter();
  const { login, print, auth } = useContext(AuthContext);

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id, setId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // Estado del modal

  async function addItemToCart(userId, gameData) {
    try {
      const response = await fetch(`http://localhost:81/api/carrito-compras/${userId}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gameData),
      });

      if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`);

      const data = await response.json();
      console.log("Juego agregado:", data);

      setModalVisible(true); // Mostrar el modal al agregar el juego

    } catch (error) {
      console.error("Error al agregar el juego al carrito:", error);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathId = window.location.pathname.split("/").pop();
      setId(pathId);
    }
  }, []);

  useEffect(() => {
    if (!id) return;

    async function fetchGame() {
      try {
        const response = await fetch(`http://localhost:81/api/catalogo-games/get-game/${id}`);

        if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`);

        const data = await response.json();
        console.log(data);
        setGame(data.data);
      } catch (error) {
        console.error("Error al obtener el juego:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGame();
  }, [id]);

  if (loading) return <p>🔄 Cargando juego...</p>;
  if (error) return <p>❌ Error: {error}</p>;
  if (!game) return <p>⚠️ Juego no encontrado.</p>;

  return (
    <div className={styles.gameContainer}>
      <div className={styles.gameContent}>
        <img src={game.portada} alt={game.titulo} className={styles.gameImage} />

        <div className={styles.gameInfo}>
          <h1 className={styles.gameTitle}>{game.titulo}</h1>
          <div className={styles.buttons}>
            <h2><strong>Precio:</strong> {game.precio}</h2>
            <div
              className={styles.buy_button}
              onClick={() => addItemToCart(auth.userId, {
                juego_id: game._id,
                titulo: game.titulo,
                precio_unitario: game.precio
              })}
            >
              <Image
                src={'/assets/icons/cart.svg'}
                alt="cart"
                width={25}
                height={25}
                className={styles.cartIcon}
              />
              Comprar!
            </div>
          </div>
          <p><strong>Desarrollador:</strong> {game.desarrollador}</p>
          <p><strong>Editor:</strong> {game.editor}</p>
          <p><strong>Género:</strong> {game.genero}</p>
          <p><strong>Lanzamiento:</strong> {game.fecha_lanzamiento}</p>
          <p className={styles.gameDescription}><strong>Descripción:</strong> {game.descripcion}</p>
        </div>
      </div>

      <div className={styles.footer_game}>
        <p><strong>Clasificación:</strong> {game.clasificacion_edad}</p>
        <p><strong>Plataformas:</strong> {game.plataformas.join(", ")}</p>
        <p><strong>Idiomas:</strong> {game.idiomas_disponibles.join(", ")}</p>
        <p><strong>Multijugador:</strong> {game.multijugador ? "Sí" : "No"}</p>
        <a href={game.enlace_trailer} className={styles.gameTrailer} target="_blank" rel="noopener noreferrer">
          🎬 Ver Tráiler
        </a>
      </div>

      <div className={styles.requisitosContainer}>
        <h2>Requisitos del Sistema</h2>
        <div className={styles.requisitosGrid}>
          <div className={styles.requisitosBox}>
            <h3>Mínimos</h3>
            <ul>
              <li><strong>Sistema Operativo:</strong> {game.requisitos_sistema.minimos.sistema_operativo}</li>
              <li><strong>Procesador:</strong> {game.requisitos_sistema.minimos.procesador}</li>
              <li><strong>Memoria:</strong> {game.requisitos_sistema.minimos.memoria}</li>
              <li><strong>Gráficos:</strong> {game.requisitos_sistema.minimos.graficos}</li>
              <li><strong>Almacenamiento:</strong> {game.requisitos_sistema.minimos.almacenamiento}</li>
            </ul>
          </div>

          <div className={styles.requisitosBox}>
            <h3>Recomendados</h3>
            <ul>
              <li><strong>Sistema Operativo:</strong> {game.requisitos_sistema.recomendados.sistema_operativo}</li>
              <li><strong>Procesador:</strong> {game.requisitos_sistema.recomendados.procesador}</li>
              <li><strong>Memoria:</strong> {game.requisitos_sistema.recomendados.memoria}</li>
              <li><strong>Gráficos:</strong> {game.requisitos_sistema.recomendados.graficos}</li>
              <li><strong>Almacenamiento:</strong> {game.requisitos_sistema.recomendados.almacenamiento}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {modalVisible && (
        <div className={styles.modalStyles}>
          <p>✅ ¡Juego agregado al carrito!</p>
          <div className={styles.modal_buttons}>
          <button className={styles.close_button} onClick={()=> router.push("/Carrito-Compras")}>Ir a Carrito</button>
          <button className={styles.close_button} onClick={()=> setModalVisible(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}



