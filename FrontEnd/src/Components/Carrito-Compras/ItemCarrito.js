import Image from "next/image";
import estilos from "../../Styles/Carrito-Compras/Carrito.module.css";

export default function ItemCarrito({ gameName, price, imageSrc="",onRemove }) {
    return (
        <div className={estilos.item_container}>
            {/* Imagen del juego */}
            <Image 
                src={`/assets/images/${imageSrc}`}
                alt={gameName} 
                width={100}
                height={100}
                quality={100}
                className={estilos.game_image} 
                loading='lazy' 
                priority={false} // Lazy loading habilitado por defecto
            />
            
            {/* Contenedor del nombre y precio */}
            <div className={estilos.info_container}>
                <h3 className={estilos.game_name}>{gameName}</h3>
                <p className={estilos.game_price}>${price.toFixed(2)}</p>
                
            </div>
            <button onClick={onRemove} className={estilos.remove_button}>
                    X
            </button>
        </div>
    );
}
