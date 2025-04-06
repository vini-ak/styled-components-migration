import { products } from "./products";
import * as Styles from "./styles";

export const HomePage = () => {
    return (
      <Styles.Container>
        <Styles.Title>Produtos em destaque</Styles.Title>
        <Styles.ProductsGrid>
          {products.map(product => (
            <Styles.ProductCard key={product.id}>
              <Styles.ProductImage src={product.image} alt={product.name} />
              <Styles.ProductName>{product.name}</Styles.ProductName>
              <Styles.ProductPrice>{product.price}</Styles.ProductPrice>
            </Styles.ProductCard>
          ))}
        </Styles.ProductsGrid>
      </Styles.Container>
    );
  };
  