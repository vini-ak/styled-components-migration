import styles from "./product-page.module.scss";

export const ProductPage = () => {
    const product = {
      name: 'Tênis Esportivo Super Leve',
      price: 'R$ 199,90',
      description:
        'Tênis ideal para corridas e caminhadas. Super leve, confortável e com design moderno.',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dlkmodas.com.br%2Fproduto%2Ftenis-esportivo-feminino-sola-alta-preto-dlk-83585&psig=AOvVaw3DO6Jv39Q3ivrU0eRxnDb9&ust=1743992997699000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjvzqquwowDFQAAAAAdAAAAABAE',
    };
  
    return (
      <div className={styles["container"]}>
        <div className={styles["image-wrapper"]}>
          <img className={styles["product-image"]} src={product.image} alt={product.name} />
        </div>
        <div className={styles["info"]}>
          <h1 className={styles["product-name"]}>{product.name}</h1>
          <p className={styles["product-price"]}>{product.price}</p>
          <p className={styles["description"]}>{product.description}</p>
          <button className={styles["add-to-cart-button"]}>Adicionar ao carrinho</button>
        </div>
      </div>
    );
  };