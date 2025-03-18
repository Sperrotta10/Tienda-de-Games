"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Para App Router

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
    <div>
      <h1>🎮 Juegos Disponibles</h1>
      <ul>
        {games.map((game) => (
          <li
            key={game._id}
            onClick={() => router.push(`/juegos/${game._id}`)}
            style={{ cursor: "pointer", listStyle: "none", marginBottom: "15px" }}
          >
            <h2 style={{ color: "white" }}>{game.titulo}</h2>
            <p style={{ color: "white" }}>💲 {game.precio}</p>
            <img src={game.imageUrl} alt={game.titulo} width="150" style={{ borderRadius: "10px" }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
