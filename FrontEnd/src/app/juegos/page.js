"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Para App Router
import styles from "@/Styles/juegos.module.css";

export default function Juegos() {
  const router = useRouter();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch("http://localhost:81/api/catalogo-games/get-games");

        if (!response.ok) throw new Error(`Error en la solicitud: ${response.status}`);

        const data = await response.json();
        setGames(data.data);
      } catch (error) {
        console.error("Error al obtener los juegos:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, []);

  if (loading) return <p>🔄 Cargando juegos...</p>;
  if (error) return <p>❌ Error: {error}</p>;
  if (!games || !Array.isArray(games)) return <p>⚠️ No hay juegos disponibles.</p>;

  return (
    <div className={styles.Search_Container}>
      <h1>🎮 Juegos Disponibles</h1>
      <ul className={styles.lista_games}>
        {games.map((game) => (
          <li
            key={game._id}
            onClick={() => router.push(`/juegos/${game._id}`)}
            className={styles.GameCard}
          >
            <img src={game.portada} alt={game.titulo} width="100" height={150} style={{ borderRadius: "10px" }} />
            <div className={styles.GameCard_info}>
              <h2 className={styles.titulo}>{game.titulo}</h2>
              <p className={styles.precio}>💲 {game.precio}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
