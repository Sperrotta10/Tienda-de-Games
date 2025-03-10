'use client';
import Image from "next/image";
import React from 'react';

import styles from "@/Styles/main/pruebaStyle.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
    dots: true,
    autuplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const clients = [
    {
        text: 'This is a template figma file, turned into code using Anima. Learn more at AnimaApp.com',
        author_image: '/assets/images/Mortal_Kombat_1.webp',
        author: 'Gemma Nolem',
        ranking: 5,
        company: 'Google'
    },
    {
        text: 'This is a template figma file, turned into code using Anima. Learn more at AnimaApp.com',
        author_image: '/assets/images/monster_hunter_wilds.jpg',
        author: 'Gemma Nolem',
        ranking: 5,
        company: 'Google'
    },
    {
        text: 'This is a template figma file, turned into code using Anima. Learn more at AnimaApp.com',
        author_image: '/assets/images/fifa25.avif',
        author: 'Gemma Nolem',
        ranking: 5,
        company: 'Google'
    }

    
] 

const Testimonials = () => {
    return (
        <>
            <h2 className={styles.testimonials_title}>Clients</h2>
            <div>
                <Slider {...settings}>
                {
                    clients.map((client, index) => {
                        return (
                            <div key={index} className={styles.testimonial}>
                                <h3>{client.text}</h3>
                                <div className={styles.author}>
                                    <Image
                                    src={client.author_image}
                                    width={100}
                                    height={100}
                                    alt={client.author}
                                    />
                                    <p>
                                        <span>⭐</span>
                                        {client.author}, <br/>
                                        {client.company}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                    )
                }
                </Slider>
            </div>
        </>
    );
};

export default Testimonials;