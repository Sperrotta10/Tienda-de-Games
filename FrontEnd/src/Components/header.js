import styles from "../Styles/header/style.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles["header__list"]}>
        

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

        {/* Sección derecha: usuario, campaña y carrito */}
        <li className={`${styles["header__item"]} ${styles["header__item--right"]}`}>
          <ul className={styles["header__user"]}>
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
              <Link
                href="/Carrito-Compras"
                className={styles.no_underline}
              >
                <Image
                  className={styles["header__user-icon"]}
                  src="/assets/icons/cart.svg"
                  alt="cart icon"
                  width={33}
                  height={34}
                  unoptimized
                />
              </Link>
            </li>
            <li className={`${styles["header__user-item"]} ${styles["header__user-item--info"]}`}>
              <span className={styles["header__user-text"]}>Manudeowo</span>

              <Image
                className={styles["header__user-img"]}
                src="/assets/images/siuu.jpeg"
                alt="perfil foto"
                width={50}
                height={50}
              />
            </li>
          </ul>
        </li>
      </ul>
    </header>
  )};
