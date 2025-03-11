"use client";

import { useState } from "react";
import estilos from "../../Styles/library.module.css";
import GameCard from "../../Components/biblioteca/GameCard.js";
import DropBox from "../../Components/biblioteca/Dropbox.js";

export default function Library() {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortMethod, setSortMethod] = useState("Orden Alfabético");
    const gamesPerPage = 10;

    const gamesList = [
        { gameName: "Fifa 25", backgroundImage: "fifa25.avif" },
        { gameName: "Monster Hunter Wilds", backgroundImage: "mh_wilds.webp" },
        { gameName: "Mortal Kombat 1", backgroundImage: "Mortal_Kombat_1.webp" },
        { gameName: "Lol", backgroundImage: "lol.png" },
        { gameName: "Dragon Ball", backgroundImage: "kokun.png" },
        { gameName: "El bicho", backgroundImage: "siuu.jpeg" },
        { gameName: "GTA VI" },
        { gameName: "Elden Ring" },
        { gameName: "Red Dead 2" },
        { gameName: "Halo Infinite" },
        { gameName: "God of War" },
        { gameName: "Zelda TOTK" },
        { gameName: "Cyberpunk 2077" },
        { gameName: "Resident Evil 4" },
        { gameName: "The Witcher 3"},
    ];

    // Aplicar ordenamiento según el método seleccionado
    const sortedGames = [...gamesList].sort((a, b) => {
        if (sortMethod === "Orden Alfabético") {
            return a.gameName.localeCompare(b.gameName);
        }
        return 0; // No cambiar el orden si no es "Orden Alfabético"
    });

    const totalPages = Math.ceil(sortedGames.length / gamesPerPage);
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = sortedGames.slice(indexOfFirstGame, indexOfLastGame);

    const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className={estilos.library_container}>
            <h1 className={estilos.title}>Biblioteca</h1>

            <div className={estilos.games_wrapper}>
                <button 
                    className={estilos.pagination_button}
                    onClick={() => goToPage(currentPage - 1)} 
                    disabled={currentPage === 1}
                >
                    ◀
                </button>

                <div className={estilos.games_container}>
                    {currentGames.map((game, index) => (
                        <GameCard 
                            key={index} 
                            gameName={game.gameName} 
                            backgroundImage={game.backgroundImage} 
                        />
                    ))}  
                </div>

                <button 
                    className={estilos.pagination_button}
                    onClick={() => goToPage(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                >
                    ▶
                </button>
            </div>

            <div className={estilos.dropbox_container}>
                <h2>Ordenar por:</h2>
                <DropBox 
                    options={["Recientemente", "Orden Alfabético", "Fecha de Lanzamiento", "Fecha de Adquisición"]}
                    onChange={(selectedOption) => setSortMethod(selectedOption)} 
                />
            </div>
        </div>
    );
}
