import Image from "next/image";
import styles from "@/Styles/main/offersStyles.module.css"
import ItemsOffers from "./itemsOfert";
import { Suspense } from "react";

export default function Offers() {
  return (
    <div className={styles.offers}>
      <h2 className={styles["offers__title"]}>Ofertas</h2>
      <div className={styles["offers__list"]}>
        <Suspense fallback={<div>Cargando...</div>}>
          <ItemsOffers />
        </Suspense>
        
      </div>
    </div>
  );
}
