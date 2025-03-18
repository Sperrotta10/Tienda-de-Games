import Image from "next/image";
import estilos from "../../Styles/Carrito-Compras/Carrito.module.css";

export default function ItemCarrito({ gameName, price, imageSrc="",onRemove }) {
    return (
        <div className={estilos.item_container}>
            
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
