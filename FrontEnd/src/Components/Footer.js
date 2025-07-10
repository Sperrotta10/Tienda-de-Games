import styles from "../Styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} GamegiX. Todos los derechos reservados.</p>
        <p>
          Este sitio web cumple con las regulaciones vigentes en materia de protección de datos y comercio electrónico.
        </p>
        <p>
          <a href="/terminos">Términos y Condiciones</a> | <a href="/privacidad">Política de Privacidad</a> | <a href="/contacto">Contacto</a>
        </p>
      </div>
    </footer>
  );
}
