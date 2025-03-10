import Image from "next/image";
import styles from "@/Styles/main/offersStyles.module.css"

export default function Offers() {
  return (
    <div className={styles.offers}>
      <h2 className={styles["offers__title"]}>Ofertas</h2>
      <div className={styles["offers__list"]}>
        <div className={styles["offers__card"]}>
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
        </div>

        <div className={styles["offers__card"]}>
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
        </div>

        <div className={styles["offers__card"]}>
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
        </div>
      </div>
    </div>
  );
}
