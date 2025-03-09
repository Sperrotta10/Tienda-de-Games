import "../Styles/style.css";
import Image from "next/image";

export default function header() {
    return (
        <header className="header">
          <ul className="header__list">
            {/* Sección izquierda: usuario, campaña y carrito */}
            <li className="header__item header__item--left">
              <ul className="header__user">
                <li className="header__user-item header__user-item--info">
                  <Image
                    className="header__user-img"
                    src="/assets/images/siuu.jpeg"
                    alt="perfil foto"
                    width={40}
                    height={40}
                    unoptimized
                  />
                  <span className="header__user-text">Manudeowo</span>
                </li>
                <li className="header__user-item header__user-item--campaign">
                  <Image
                    className="header__user-icon"
                    src="/assets/icons/campaign.svg"
                    alt="campaign icon"
                    width={24}
                    height={24}
                    unoptimized
                  />
                </li>
                <li className="header__user-item header__user-item--cart">
                  <Image
                    className="header__user-icon"
                    src="/assets/icons/cart.svg"
                    alt="cart icon"
                    width={24}
                    height={24}
                    unoptimized
                  />
                </li>
              </ul>
            </li>

            {/* Sección central: búsqueda */}
            <li className="header__item header__item--center">
              <div className="header__search">
                <input className="header__search-input" type="text" placeholder="Buscar" />
                <Image
                  className="header__search-icon"
                  src="/assets/icons/search.svg"
                  alt="search icon"
                  width={24}
                  height={24}
                  unoptimized
                />
              </div>
            </li>

            {/* Sección derecha: navegación */}
            <li className="header__item header__item--right">
              <ul className="header__nav">
                <li className="header__nav-item header__nav-item--dropdown">
                  <span className="header__nav-link">Juegos</span>
                  <ul className="header__dropdown">
                    <li className="header__dropdown-item">Carlos duti</li>
                    <li className="header__dropdown-item">Gordo wor</li>
                    <li className="header__dropdown-item">Among us</li>
                  </ul>
                  <Image
                    className="header__dropdown-icon"
                    src="/assets/icons/arrow.svg"
                    alt="arrow icon"
                    width={16}
                    height={16}
                    unoptimized
                  />
                </li>
                <li className="header__nav-item">
                  <span className="header__nav-link">Biblioteca</span>
                </li>
                <li className="header__nav-item">
                  <span className="header__nav-link">Reseñas</span>
                </li>
              </ul>
            </li>
          </ul>
        </header>
      
    );
  }
  









