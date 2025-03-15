import Link from "next/link";
import Image from "next/image";
import styles from "../Styles/sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image 
            src="/assets/icons/search.svg"
            alt="Logo"
            width={40}
            height={40}
            className={styles.icon}
          />
        </Link>
      </div>

      <ul className={styles.sidebarNav}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            <Image 
              src="/assets/icons/cart.svg"
              alt="Inicio"
              width={24}
              height={24}
              className={styles.icon}
            />
            <span>Inicio</span>
          </Link>
        </li>
        
        <li className={styles.navItem}>
          <Image 
            src="/assets/icons/cart.svg"
            alt="Juegos"
            width={18}
            height={18}
            className={styles.icon}
          />
          <span>Juegos</span>
        </li>

        <li className={styles.navItem}>
          <Link href="/biblioteca" className={styles.navLink}>
            <Image 
              src="/assets/icons/cart.svg"
              alt="Biblioteca"
              width={24}
              height={24}
              className={styles.icon}
            />
            <span>Biblioteca</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
