import Image from "next/image";
import styles from "@/Styles/main/offersStyles.module.css";
import ItemsOffers from "./itemsOfert";

export default async function Offers() {
  //Esto se sustituira por una llamada a la API
  const dataOffers = [
    {
      gameName: "Fifa 25",
      backgroundImage: "fifa25.avif",
      price: "59.99",
      offerPrice: "19.99",
    },
    {
      gameName: "Monster Hunter Wilds",
      backgroundImage: "mh_wilds.webp",
      price: "40",
      offerPrice: "30",
    },
    {
      gameName: "Mortal Kombat 1",
      backgroundImage: "Mortal_Kombat_1.webp",
      price: "60",
      offerPrice: "50",
    },
    {
      gameName: "Lol",
      backgroundImage: "lol.png",
      price: "10",
      offerPrice: "2",
    },
    {
      gameName: "Dragon Ball",
      backgroundImage: "kokun.png",
      price: "60",
      offerPrice: "30",
    },
    {
      gameName: "El bicho",
      backgroundImage: "siuu.jpeg",
      price: "75",
      offerPrice: "50",
    },
    {
      gameName: "Fifa 25",
      backgroundImage: "fifa25.avif",
      price: "59.99",
      offerPrice: "19.99",
    },
    {
      gameName: "Elden Ring",
      backgroundImage: "elden-ring.webp",
      price: "60",
      offerPrice: "45",
    }
  ];
  return (
    <div className={styles.offers}>
      <h2 className={styles["offers__title"]}>Ofertas</h2>
      <div className={styles["offers__list"]}>
        <ItemsOffers dataOffers={dataOffers} />
      </div>
    </div>
  );
}
