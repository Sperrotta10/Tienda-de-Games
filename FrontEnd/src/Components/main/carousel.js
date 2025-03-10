'use client';
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/Styles/main/carouselStyle.module.css";
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Carousel() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = new Swiper('.slider-wrapper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Habilita clics en los bullets
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    swiperRef.current = swiperInstance;

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.carousel}>
      <div className="container swiper">
        <div className={styles["slider-wrapper"]}>
          <div className={`swiper-wrapper ${styles["card-list"]}`}>
            <div className={`swiper-slide ${styles["container-image"]}`}>
              <Image
                className={styles["game-image"]}
                src="/assets/images/monster_hunter.jpg"
                alt="monster_hunter"
                width={500}
                height={500}
              />
              <div className={styles.layer}></div>
              <h2 className={styles["game-title"]}>Monster Hunter Wilds</h2>
              <div className={styles["info-buy"]}>
                <span className={styles["info-buy__price"]}>Precio $59.99</span>
                <button className={styles["info-buy__button"]}>Comprar!</button>
              </div>
            </div>
            <div className={`swiper-slide ${styles["container-image"]}`}>
              <Image
                className={styles["game-image"]}
                src="/assets/images/monster_hunter.jpg"
                alt="monster_hunter"
                width={500}
                height={500}
              />
              <div className={styles.layer}></div>
              <h2 className={styles["game-title"]}>Monster Hunter Wilds</h2>
              <div className={styles["info-buy"]}>
                <span className={styles["info-buy__price"]}>Precio $59.99</span>
                <button className={styles["info-buy__button"]}>Comprar!</button>
              </div>
            </div>
          </div>
          {/* Paginación */}
          <div className="swiper-pagination"></div>
          {/* Botones de navegación */}
          <div className="swiper-slide-button swiper-button-prev"></div>
          <div className="swiper-slide-button swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
}