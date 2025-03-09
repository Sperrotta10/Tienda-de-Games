import estilos from "../Styles/library.module.css";
import GameCard from "../Components/GameCard.js";
export default function Home() {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <GameCard
        gameName="Fifa 25"
        backgroundImage="fifa25.avif"
      />
      
    </div>
  );
}
