import { useMemo } from "react";
import styles from "./cart-page.module.scss";

export const CartPage = () => {
    const cartItems = useMemo(() => {
      return [
        {
          id: 1,
          name: 'Tênis Esportivo',
          price: 'R$ 199,90',
          image: 'https://via.placeholder.com/100x80',
        },
        {
          id: 2,
          name: 'Camisa Polo',
          price: 'R$ 89,90',
          image: 'https://via.placeholder.com/100x80',
        },
      ];
    }, []);

    return (
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Seu Carrinho</h1>
        <div className={styles["cart-list"]}>
          {cartItems.map((item) => (
            <div className={styles["cart-item"]} key={item.id}>
              <img className={styles["product-image"]} src={item.image} alt={item.name} />
              <div className={styles["info"]}>
                <h2 className={styles["name"]}>{item.name}</h2>
                <p className={styles["price"]}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles["total"]}>Total: R$ 289,80</div>
      </div>
    );
  };