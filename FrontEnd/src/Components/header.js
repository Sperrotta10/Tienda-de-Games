import styles from "../Styles/header/style.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles["header__list"]}>
        {/* Sección izquierda: usuario, campaña y carrito */}
        <li className={`${styles["header__item"]} ${styles["header__item--left"]}`}>
          <ul className={styles["header__user"]}>
            <li className={`${styles["header__user-item"]} ${styles["header__user-item--info"]}`}>
              <Image
                className={styles["header__user-img"]}
                src="/assets/images/siuu.jpeg"
                alt="perfil foto"
                width={50}
                height={50}
              />
              <span className={styles["header__user-text"]}>Manudeowo</span>
            </li>
            <li className={`${styles["header__user-item"]} ${styles["header__user-item--campaign"]}`}>
              <Image
                className={styles["header__user-icon"]}
                src="/assets/icons/campaign.svg"
                alt="campaign icon"
                width={33}
                height={33}
                unoptimized
              />
            </li>
            <li className={`${styles["header__user-item"]} ${styles["header__user-item--cart"]}`}>
              <Image
                className={styles["header__user-icon"]}
                src="/assets/icons/cart.svg"
                alt="cart icon"
                width={33}
                height={34}
                unoptimized
              />
            </li>
          </ul>
        </li>

        {/* Sección central: búsqueda */}
        <li className={`${styles["header__item"]} ${styles["header__item--center"]}`}>
          <div className={styles["header__search"]}>
            <input
              className={styles["header__search-input"]}
              type="text"
              placeholder="Buscar"
            />
            <Image
              className={styles["header__search-icon"]}
              src="/assets/icons/search.svg"
              alt="search icon"
              width={24}
              height={24}
              unoptimized
            />
          </div>
        </li>

        {/* Sección derecha: navegación */}
        <li className={`${styles["header__item"]} ${styles["header__item--right"]}`}>
          <ul className={styles["header__nav"]}>
            <li className={`${styles["header__nav-item"]} ${styles["header__nav-item--dropdown"]}`}>
              <span className={styles["header__nav-link"]}>Juegos</span>
              <ul className={styles["header__dropdown"]}>
                <li className={styles["header__dropdown-item"]}>Carlos duti</li>
                <li className={styles["header__dropdown-item"]}>Gordo wor</li>
                <li className={styles["header__dropdown-item"]}>Among us</li>
              </ul>
              <Image
                className={styles["header__dropdown-icon"]}
                src="/assets/icons/arrow.svg"
                alt="arrow icon"
                width={16}
                height={16}
                unoptimized
              />
            </li>
            <li className={styles["header__nav-item"]}>
              <Link
                href="/biblioteca"
                className={styles.no_underline}
              >
                <span className={styles["header__nav-link"]}>Biblioteca</span>
              </Link>
            </li>
            
            <li className={styles["header__nav-item"]}>
            <Link
                href="/"
                className={styles.no_underline}
              >
              <span className={styles["header__nav-link"]}>Tienda</span>
            </Link>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
}
