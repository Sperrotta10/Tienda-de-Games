"use client";
import { useEffect, useState } from "react";
import GameCard from "../../Components/juegos/GameCard"; // Importamos el nuevo componente
import styles from "@/Styles/juegos.module.css";

export default function Juegos() {
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
          <GameCard key={game._id} game={game} />
        ))}
      </ul>
    </div>
  );
}
