import Image from "next/image";
import styles from "@/Styles/main/gamesStyle.module.css";

export default function Games() {
  return (
    <div className={styles["games"]}>
  <h2 className={styles["games__title"]}>Juegos</h2>
  <div className={styles["games__container"]}>
    {/* Categoría: Lanzamientos */}
    <div className={styles["games__category"]}>
      <h3 className={styles["games__category-title"]}>Lanzamientos</h3>
      <div className={styles["games__list"]}>
        <div className={styles["games__card"]}>
          <div className={styles["games__card-image-container"]}>
            <Image
              className={styles["games__card-image"]}
              src="/assets/images/mh_wilds.webp"
              alt="Monster hunter"
              width={300} // Ajusta según el tamaño real de la imagen
              height={400} // Ajusta según el tamaño real de la imagen
            />
          </div>
          <div className={styles["games__card-info"]}>
            <h4 className={styles["games__card-title"]}>Monster Hunter Wilds</h4>
            <span className={styles["games__card-price"]}>$59.99</span>
          </div>
        </div>
        <div className={styles["games__card"]}>
          <div className={styles["games__card-image-container"]}>
            <Image
              className={styles["games__card-image"]}
              src="/assets/images/mh_wilds.webp"
              alt="Monster hunter"
              width={300}
              height={400}
            />
          </div>
          <div className={styles["games__card-info"]}>
            <h4 className={styles["games__card-title"]}>Monster Hunter Wilds</h4>
            <span className={styles["games__card-price"]}>$59.99</span>
          </div>
        </div>
      </div>
    </div>

    {/* Categoría: Más Vendidos */}
    <div className={styles["games__category"]}>
      <h3 className={styles["games__category-title"]}>Más Vendidos</h3>
      <div className={styles["games__list"]}>
        <div className={styles["games__card"]}>
          <div className={styles["games__card-image-container"]}>
            <Image
              className={styles["games__card-image"]}
              src="/assets/images/mh_wilds.webp"
              alt="Monster hunter"
              width={300}
              height={400}
            />
          </div>
          <div className={styles["games__card-info"]}>
            <h4 className={styles["games__card-title"]}>Monster Hunter Wilds</h4>
            <span className={styles["games__card-price"]}>$59.99</span>
          </div>
        </div>
        <div className={styles["games__card"]}>
          <div className={styles["games__card-image-container"]}>
            <Image
              className={styles["games__card-image"]}
              src="/assets/images/mh_wilds.webp"
              alt="Monster hunter"
              width={300}
              height={400}
            />
          </div>
          <div className={styles["games__card-info"]}>
            <h4 className={styles["games__card-title"]}>Monster Hunter Wilds</h4>
            <span className={styles["games__card-price"]}>$59.99</span>
          </div>
        </div>
      </div>
    </div>

    {/* Categoría: Más Jugados */}
    <div className={styles["games__category"]}>
      <h3 className={styles["games__category-title"]}>Más Jugados</h3>
      <div className={styles["games__list"]}>
        <div className={styles["games__card"]}>
          <div className={styles["games__card-image-container"]}>
            <Image
              className={styles["games__card-image"]}
              src="/assets/images/mh_wilds.webp"
              alt="Monster hunter"
              width={300}
              height={400}
            />
          </div>
          <div className={styles["games__card-info"]}>
            <h4 className={styles["games__card-title"]}>Monster Hunter Wilds</h4>
            <span className={styles["games__card-price"]}>$59.99</span>
          </div>
        </div>
        <div className={styles["games__card"]}>
          <div className={styles["games__card-image-container"]}>
            <Image
              className={styles["games__card-image"]}
              src="/assets/images/mh_wilds.webp"
              alt="Monster hunter"
              width={300}
              height={400}
            />
          </div>
          <div className={styles["games__card-info"]}>
            <h4 className={styles["games__card-title"]}>Monster Hunter Wilds</h4>
            <span className={styles["games__card-price"]}>$59.99</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
