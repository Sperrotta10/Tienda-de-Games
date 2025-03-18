import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/Styles/juegos.module.css";

export default function GameCard({ game }) {
  const router = useRouter();

  return (
    <li
      onClick={() => router.push(`/juegos/${game._id}`)}
      className={styles.GameCard}
    >
        <img src={game.portada} alt={game.titulo} width="100" height={150} style={{ borderRadius: "10px" }} />
      <div className={styles.GameCardInfo}>
        <h2 className={styles.titulo}>{game.titulo}</h2>
        <p className={styles.precio}>💲 {game.precio}</p>
      </div>
    </li>
  );
}