import Image from 'next/image';
import styles from '../../Styles/library.module.css';

const GameCard = ({ gameName, backgroundImage ="" }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageBackground}>
            {/* Usamos el componente Image de Next.js */}
            <Image
                src={`/assets/images/${backgroundImage}`}
                alt={gameName}
                fill={true} // Hace que la imagen ocupe todo el contenedor
                loading='lazy' 
                quality={100} // Calidad de la imagen
                priority={false} // Lazy loading habilitado por defecto
            />
                <div className={styles.gradient}>
                    <div  className={styles.gamecard_footer}>
                        <h3 className={styles.gameName}>{gameName}</h3>
                        <Image
                            src="/assets/icons/download.svg"
                            alt="Play"
                            width={18}
                            height={18}
                            className={styles.whiteIcon}
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
  };
export default GameCard;
