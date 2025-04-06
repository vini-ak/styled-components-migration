import styles from "./footer.module.scss";

export const Footer = () => {
    return (
      <footer className={styles["footer-container"]}>
        &copy; {new Date().getFullYear()} MinhaLoja. Todos os direitos reservados.
      </footer>
    );
  };
  