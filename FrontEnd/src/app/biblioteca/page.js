import estilos from "../../Styles/library.module.css";
import GameCard from "../../Components/biblioteca/GameCard.js";
import DropBox from "../../Components/biblioteca/Dropbox.js";

export default function library() {
    const games = [
        {
          gameName: "Fifa 25",
          backgroundImage: "fifa25.avif"
        },
        {
          gameName: "Monster Hunter Wilds",
          backgroundImage: "mh_wilds.webp"
        },
        {
          gameName: "Mortal Kombat 1",
          backgroundImage: "Mortal_Kombat_1.webp"
        },
        {
          gameName: "Lol",
          backgroundImage: "lol.png"
        },
        {
            gameName: "Dragon Ball",
            backgroundImage: "kokun.png"
          },
          {
            gameName: "El bicho",
            backgroundImage: "siuu.jpeg"
          }
      ];
    return (
        <div className={estilos.library_container}>
            <h1 className={estilos.title}>Biblioteca</h1>
            <div className={estilos.games_container}>
            {games.map((game, index) => (
                <GameCard 
                key={index} 
                gameName={game.gameName} 
                backgroundImage={game.backgroundImage} 
                />
            ))}  
            </div>
            
            <div className={estilos.dropbox_container}>
            <h2>Ordenar por: </h2>
            <DropBox options={["Recientemente", "Orden Alfábetico", "Fecha de Lanzamiento", "Fecha de Adquisición"]}  />
             </div>
        </div>
    );
}