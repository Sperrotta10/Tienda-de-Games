"use client";
import Image from "next/image";
import styles from "@/Styles/main/offersStyles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ItemsOffers({ dataOffers }) {
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  /* await new Promise((resolve) => setTimeout(resolve, 3000)); */

  return (
    <Slider {...settings}>
      {dataOffers.map((item, index) => (
        <div key={index} className={`${styles["offers__card"]} card`}>
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
                -
                {Math.round(
                  ((parseFloat(item.price) - parseFloat(item.offerPrice)) /
                    parseFloat(item.price)) *
                    100
                )}
                %
              </span>
              <del className={styles["offers__card-price-original"]}>
                ${item.price}
              </del>
              <span className={styles["offers__card-price"]}>
                ${item.offerPrice}
              </span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
