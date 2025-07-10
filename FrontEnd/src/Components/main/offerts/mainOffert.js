//Este archivo no se usa


import Offers from "./offerts";
import { Suspense } from "react";


export default function MainOffers() {
    
    //Esto se sustituira por una llamada a la API
    const dataOffers = [
        { gameName: "Fifa 25", backgroundImage: "fifa25.avif", price: "59.99", offerPrice: "19.99" },
        { gameName: "Monster Hunter Wilds", backgroundImage: "mh_wilds.webp", price: "40", offerPrice: "30" },
        { gameName: "Mortal Kombat 1", backgroundImage: "Mortal_Kombat_1.webp", price: "60", offerPrice: "50" },
        { gameName: "Lol", backgroundImage: "lol.png", price: "10", offerPrice: "2" },
        { gameName: "Dragon Ball", backgroundImage: "kokun.png", price: "60", offerPrice: "30" },
        { gameName: "El bicho", backgroundImage: "siuu.jpeg", price: "75", offerPrice: "50" },
        { gameName: "Fifa 25", backgroundImage: "fifa25.avif", price: "59.99", offerPrice: "19.99" },
    ];
  return (
    <Suspense>
        <Offers dataOffers={dataOffers} />
    </Suspense>
  );
}
