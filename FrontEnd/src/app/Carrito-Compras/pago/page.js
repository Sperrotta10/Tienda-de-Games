'use client';
import Image from "next/image";
import style from "@/Styles/Carrito-Compras/pago/pago.module.css"
export default function PagePago() {

    function onClickTarjeta(event) {
        // Verificamos si el elemento clicado es válido
        const clickedElement = event.target;

        // Obtenemos todos los elementos con la clase "taerjeta"
        const taerjetas = document.querySelectorAll(".taerjeta");

        // Removemos el borde de todos los elementos con la clase "taerjeta"
        taerjetas.forEach(function (taerjeta) {
            taerjeta.style.border = "none";
        });

        // Asignamos un borde de 1px al elemento clicado
        if (clickedElement.classList.contains("taerjeta")) {
            clickedElement.style.border = "2px solid #892CDC";
        }
    }

    return (
        <div className={style["pago-container"]}>
            <form className={style["pago-form"]}>
                <h1 className={style["pago-title"]}>Metodo de Pago</h1>
                <p className={style["pago-texto"]}>Elige tu tipo de tarjeta.</p>
                <div className={style["pago-container-tarjetas"]}>
                    <Image
                        className={`${style["pago-tarjeta-image"]} ${"taerjeta"}`}
                        src={`/assets/images/${"visa.png"}`}
                        alt="tarjeta"
                        width={60}
                        height={35}
                        onClick={onClickTarjeta}
                    ></Image>
                    <Image
                        className={`${style["pago-tarjeta-image"]} ${"taerjeta"}`}
                        src={`/assets/images/${"american_express.png"}`}
                        alt="tarjeta"
                        width={60}
                        height={35}
                        onClick={onClickTarjeta}
                    ></Image>
                    <Image
                        className={`${style["pago-tarjeta-image"]} ${"taerjeta"}`}
                        src={`/assets/images/${"jcb.png"}`}
                        alt="tarjeta"
                        width={60}
                        height={35}
                        onClick={onClickTarjeta}
                    ></Image>
                    <Image
                        className={`${style["pago-tarjeta-image"]} ${"taerjeta"}`}
                        src={`/assets/images/${"mastercard.png"}`}
                        alt="tarjeta"
                        width={60}
                        height={35}
                        onClick={onClickTarjeta}
                    ></Image>
                </div>
                <div className={style["pago-container-inputs"]}>
                    <h3 className={style["pago-title-inputs"]}>Ingrese los datos de su tarjeta</h3>
                    <div className={style["pago-inputs-double"]}>
                        <label htmlFor="inputNumero">Numero de la tarjeta</label>
                        <input
                            id="inputNumero"
                            type="text"
                            placeholder="Ingrese los digitos de la tarjeta"
                        />
                    </div>
                    <div className={style["pago-inputs-double"]}>
                        <label htmlFor="inputFecha">Fecha de Vencimiento</label>
                        <input
                            className={style["pago-input-fecha"]}
                            id="inputFecha"
                            type="date"
                            placeholder="Ingrese los digitos de la tarjeta"
                        />
                    </div>
                    <div className={style["pago-inputs-double"]}>
                        <label htmlFor="inputCodigo">Codigo de Seguridad</label>
                        <input
                            id="inputCodigo"
                            type="password"
                            placeholder="Ingrese el Codigo de Seguridad"
                        />
                    </div>
                    <div className={style["pago-inputs-double"]}>
                        <label htmlFor="inputTitular">Titular de la tarjeta</label>
                        <input
                            id="inputTitular"
                            type="text"
                            placeholder="Nombres y Apellidos"
                        />
                    </div>
                </div>
                <button type="button" className={style["pago-boton"]}>Realizar Pago</button>
            </form>
        </div>
    );
}
