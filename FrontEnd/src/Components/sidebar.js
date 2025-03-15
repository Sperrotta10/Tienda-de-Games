import Link from "next/link";
import styles from "../Styles/sidebar.module.css";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Image 
            src="/assets/icons/search.svg"
            alt="cart icon"
            width={40}
            height={40}
            className={styles.icon} 
          /> 
      </div>
      <ul className={styles.sidebarNav}>
        <li className={styles.navItem}>
          <Image 
            src="/assets/icons/cart.svg"
            alt="cart icon"
            width={24}
            height={24}
            className={styles.icon} 
          /> 
          <span>Juegos</span>
        </li>
        <li className={styles.navItem}>
          <Image 
            src="/assets/icons/cart.svg"
            alt="cart icon"
            width={24}
            height={24}
            className={styles.icon} 
          /> 
          <Link href="/biblioteca" className={styles.navLink}>
            <span>Biblioteca</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Image 
            src="/assets/icons/cart.svg"
            alt="cart icon"
            width={24}
            height={24}
            className={styles.icon} 
          />  
          <Link href="/" className={styles.navLink}>
            <span>Tienda</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
