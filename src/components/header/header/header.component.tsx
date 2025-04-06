import { Link } from "react-router-dom";
import { AppPaths } from "../../../common/paths";
import styles from  "./header.module.scss";

export const Header = () => {
    return (
      <header className={styles["header-container"]}>
        <Link to={AppPaths.home} className={styles["logo"]}>MinhaLoja</Link>
        <nav className={styles["nav"]}>
          <Link to={AppPaths.home} className={styles["nav-link"]}>Home</Link>
          <Link to={AppPaths.cart}  className={styles["nav-link"]}>Carrinho</Link>
        </nav>
      </header>
    );
  };
  