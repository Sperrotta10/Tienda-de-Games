'use client';
export const dynamic = 'force-dynamic';
import GameCard from "../../Components/juegos/GameCard"; // Importamos el nuevo componente
import styles from "@/Styles/juegos.module.css";

export default function BusquedaComponent({ gamesFiltados }) {
    return (


        <div className={styles.Search_Container}>
            <h1>🎮 Juegos Encontradoss</h1>
            <ul className={styles.lista_games}>
                {gamesFiltados.map((game) => (
                    <GameCard key={game._id} game={game} />
                ))}
            </ul>
        </div>

    );
}