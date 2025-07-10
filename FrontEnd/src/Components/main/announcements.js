import Image from "next/image";
import styles from "@/Styles/main/announcementsStyle.module.css"

export default function Announcements() {
  return (
    <div className={styles["main-announcements"]}>
  <div className={styles["main-announcements__container"]}>
    {/* Anuncio individual */}
    <div className={styles["main-announcements__item"]}>
      <div className={styles["main-announcements__image-wrapper"]}>
        <Image
          className={styles["main-announcements__image"]}
          src="/assets/images/Mortal_Kombat_1.webp"
          alt="Mortal Kombat 1"
          width={600} // Ajusta según el tamaño real de la imagen
          height={400} // Ajusta según el tamaño real de la imagen
        />
      </div>
      <div className={`${styles["main-announcements__content"]} ${styles["announcements__content--right"]}`}>
        <div>
          <h3 className={styles["main-announcements__title"]}>Mortal Kombat 1</h3>
          <p className={styles["main-announcements__description"]}>
            Mortal Kombat™ creado por Liu Kang, Dios del Fuego. ¡Mortal Kombat™ 1 abre paso a una nueva era de esta icónica saga con un nuevo sistema de kombate, modos de juego y fatalities!
          </p>
        </div>
        <button className={`${styles["main-announcements__button"]} ${styles["announcements__button--right"]}`}>$39.99</button>
      </div>
    </div>

    {/* Anuncio individual */}
    <div className={styles["main-announcements__item"]}>
      <div className={styles["main-announcements__image-wrapper"]}>
        <Image
          className={styles["main-announcements__image"]}
          src="/assets/images/Mortal_Kombat_1.webp"
          alt="Mortal Kombat 1"
          width={600}
          height={400}
        />
      </div>
      <div className={`${styles["main-announcements__content"]} ${styles["announcements__content--right"]}`}>
        <div>
          <h3 className={styles["main-announcements__title"]}>Mortal Kombat 1</h3>
          <p className={styles["main-announcements__description"]}>
            Mortal Kombat™ creado por Liu Kang, Dios del Fuego. ¡Mortal Kombat™ 1 abre paso a una nueva era de esta icónica saga con un nuevo sistema de kombate, modos de juego y fatalities!
          </p>
        </div>
        <button className={`${styles["main-announcements__button"]} ${styles["announcements__button--right"]}`}>$39.99</button>
      </div>
    </div>
  </div>

  {/* Sección de exploración */}
  <div className={styles["main-announcements__explore"]}>
    <div className={`${styles["main-announcements__image-wrapper"]} ${styles["main-announcements__image-wrapper--explore"]}`}>
      <Image
        className={`${styles["main-announcements__image"]} ${styles["main-announcements__image--explore"]}`}
        src="/assets/images/lol.png"
        alt="League of Legends"
        width={800} // Ajusta según el tamaño real de la imagen
        height={500} // Ajusta según el tamaño real de la imagen
      />
    </div>
    <div className={`${styles["main-announcements__content"]} ${styles["main-announcements__content--explore"]}`}>
      <div>
        <h3 className={styles["main-announcements__title"]}>
          ¡Explora todo nuestro catálogo de juegos!
        </h3>
        <p className={styles["main-announcements__description"]}>
          Explora los diferentes juegos disponibles en nuestra colección. ¡Vuelve todos los jueves para conseguir un juego nuevo!
        </p>
      </div>
      <button className={`${styles["main-announcements__button"]} ${styles["main-announcements__button--explore"]}`}>Explorar</button>
    </div>
  </div>

  {/* Sección secundaria */}
  <div className={styles["main-announcements__secondary"]}>
    <div className={`${styles["main-announcements__image-wrapper"]} ${styles["main-announcements__image-wrapper--secondary"]}`}>
      <Image
        className={`${styles["main-announcements__image"]} ${styles["main-announcements__image--secondary"]}`}
        src="/assets/images/kokun.png"
        alt="Guerreros Z"
        width={600} // Ajusta según el tamaño real de la imagen
        height={400} // Ajusta según el tamaño real de la imagen
      />
    </div>
    <div className={`${styles["main-announcements__content"]} ${styles["main-announcements__content--secondary"]}`}>
      <div>
        <h3 className={styles["main-announcements__title"]}>
          Prueba de Anuncio sin fondo!
        </h3>
        <p className={styles["main-announcements__description"]}>
          Asi se veria una info sin fondo!, guerreros Z durisimos hermano. Explora los diferentes juegos disponibles en nuestra colección.
        </p>
      </div>
      <button className={`${styles["main-announcements__button"]} ${styles["main-announcements__button--secondary"]}`}>Ir</button>
    </div>
  </div>
</div>
  );
}
