import { products } from "./products";
import styles from "./home-page.module.scss";

export const HomePage = () => {
    return (
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Produtos</h1>
        <div className={styles["products-grid"]}>
          {products.map((product) => (
            <div className={styles["product-card"]} key={product.id}>
              <img className={styles["product-image"]} src={product.image} alt={product.name} />
              <h2 className={styles["product-name"]}>{product.name}</h2>
              <p className={styles["product-price"]}>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  