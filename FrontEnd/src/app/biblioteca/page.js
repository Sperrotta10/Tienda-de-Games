import estilos from "../../Styles/library.module.css";
import GameCard from "../../Components/GameCard.js";
import DropBox from "../../Components/Dropbox.js";

export default function library() {

    const handleSelect = (option) => {
        console.log("Seleccionaste:", option);
      };
    return (
        <div className={estilos.library_container}>
            <h1 className={estilos.title}>Biblioteca</h1>
            <div className={estilos.games_container}>
                <GameCard
                    gameName="Monster Hunter Wilds"
                    backgroundImage="mh_wilds.webp"
                />
                <GameCard
                    gameName="Mortal Kombat 1"
                    backgroundImage="Mortal_Kombat_1.webp"
                />
                <GameCard
                    gameName="Fifa 25"
                    backgroundImage="fifa25.avif"
                />
                <GameCard
                    gameName="Fifa 25"
                    backgroundImage="fifa25.avif"
                />
                <GameCard
                    gameName="Fifa 25"
                    backgroundImage="fifa25.avif"
                />
                <GameCard
                    gameName="Fifa 25"
                    backgroundImage="fifa25.avif"
                />
                <GameCard
                    gameName="Fifa 25"
                    backgroundImage="fifa25.avif"
                />
                <GameCard
                    gameName="Fifa 25"
                    backgroundImage="fifa25.avif"
                />
                 <GameCard
                    gameName="Fifa 25"
                    backgroundImage="fifa25.avif"
                />
                 <GameCard
                    gameName="Fifa 25"
                    backgroundImage="fifa25.avif"
                />
                 <GameCard
                    gameName="Fifa 25"
                    backgroundImage="fifa25.avif"
                />
                 <GameCard
                    gameName="Fifa 25"
                    backgroundImage="fifa25.avif"
                />
            </div>
            
            <div className={estilos.dropbox_container}>
            <h2>Ordenar por: </h2>
            <DropBox options={["Recientemente", "Orden Alfábetico", "Fecha de Lanzamiento", "Fecha de Adquisición"]}  />
             </div>
        </div>
    );
}