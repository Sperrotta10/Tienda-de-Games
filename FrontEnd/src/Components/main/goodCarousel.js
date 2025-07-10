"use client";
import Image from "next/image";
import styles from "@/Styles/main/goodCarouselStyle.module.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 2500,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const GoodCarousel = () => {
  return (
    <div className={styles["carousel"]}>
      <div>
        <div className={styles["slider-wrapper"]}>
          <div>
            <Slider {...settings}>
              <div className={styles["container-image"]}>
                <Image
                  className={styles["game-image"]}
                  src={"/assets/images/mh-wilds-banner.jpg"}
                  alt="Monster hunter"
                  width={500}
                  height={500}
                />
                <div className={styles["layer"]}></div>
                <h2 className={styles["game-title"]}>
                  Monster Hunter Wilds <br />
                  <span className={styles["info-buy__price"]}>
                    Precio $59.99
                  </span>
                </h2>
                <div className={styles["info-buy"]}>
                  <button className={styles["info-buy__button"]}>
                    Comprar!
                  </button>
                </div>
              </div>
              <div className={styles["container-image"]}>
                <Image
                  className={styles["game-image"]}
                  src={"/assets/images/er-banner.jpg"}
                  alt="Monster hunter"
                  width={500}
                  height={500}
                />
                <div className={styles["layer"]}></div>
                <h2 className={styles["game-title"]}>
                  Elden Ring <br />
                  <span className={styles["info-buy__price"]}>
                    Precio $59.99
                  </span>
                </h2>
                <div className={styles["info-buy"]}>
                  <button className={styles["info-buy__button"]}>
                    Comprar!
                  </button>
                </div>
              </div>
            </Slider>
          </div>{" "}
          {/* Aqui */}
        </div>
      </div>
    </div>
  );
};

export default GoodCarousel;
