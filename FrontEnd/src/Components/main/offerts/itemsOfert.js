import Image from "next/image";
import styles from "@/Styles/main/offersStyles.module.css";

export default async function ItemsOffers() {
    const offerGames = [
        { gameName: "Fifa 25", backgroundImage: "fifa25.avif", price: "59.99", offerPrice: "19.99" },
        { gameName: "Monster Hunter Wilds", backgroundImage: "mh_wilds.webp", price: "40", offerPrice: "30" },
        { gameName: "Mortal Kombat 1", backgroundImage: "Mortal_Kombat_1.webp", price: "60", offerPrice: "50" },
        { gameName: "Lol", backgroundImage: "lol.png", price: "10", offerPrice: "2" },
        { gameName: "Dragon Ball", backgroundImage: "kokun.png", price: "60", offerPrice: "30" },
        { gameName: "El bicho", backgroundImage: "siuu.jpeg", price: "75", offerPrice: "50" },
        { gameName: "Fifa 25", backgroundImage: "fifa25.avif", price: "59.99", offerPrice: "19.99" },
    ];

    
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <>
            {offerGames.map((item, index) => (
                <div key={index} className={styles["offers__card"]}>
                    <div className={styles["offers__card-overlay"]}></div>
                    <Image
                        className={styles["offers__card-image"]}
                        src={`/assets/images/${item.backgroundImage}`}
                        alt={item.gameName}
                        width={300}
                        height={200}
                        priority
                    />
                    <div className={styles["offers__card-info"]}>
                        <h3 className={styles["offers__card-title"]}>{item.gameName}</h3>
                        <div>
                            <span className={styles["offers__card-discount"]}>
                                -{Math.round(((parseFloat(item.price) - parseFloat(item.offerPrice)) / parseFloat(item.price)) * 100)}%
                            </span>
                            <del className={styles["offers__card-price-original"]}>${item.price}</del>
                            <span className={styles["offers__card-price"]}>${item.offerPrice}</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}


{/* <div className={styles["offers__card"]}>
<div className={styles["offers__card-overlay"]}></div>
<Image
  className={styles["offers__card-image"]}
  src="/assets/images/fifa25.avif"
  alt="Fifa 25"
  width={300}
  height={200}
  priority
/>
<div className={styles["offers__card-info"]}>
  <h3 className={styles["offers__card-title"]}>Fifa 25</h3>
  <div>
    <span className={styles["offers__card-discount"]}>-75%</span>
    <del className={styles["offers__card-price-original"]}>
      $59.99
    </del>
    <span className={styles["offers__card-price"]}>$19.99</span>
  </div>
</div>
</div> */}