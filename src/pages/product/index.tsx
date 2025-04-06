import * as Styles from "./styles";

export const ProductPage = () => {
    const product = {
      name: 'Tênis Esportivo Super Leve',
      price: 'R$ 199,90',
      description:
        'Tênis ideal para corridas e caminhadas. Super leve, confortável e com design moderno.',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dlkmodas.com.br%2Fproduto%2Ftenis-esportivo-feminino-sola-alta-preto-dlk-83585&psig=AOvVaw3DO6Jv39Q3ivrU0eRxnDb9&ust=1743992997699000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjvzqquwowDFQAAAAAdAAAAABAE',
    };
  
    return (
      <Styles.Container>
        <Styles.ImageWrapper>
          <Styles.ProductImage src={product.image} alt={product.name} />
        </Styles.ImageWrapper>
        <Styles.Info>
          <Styles.ProductName>{product.name}</Styles.ProductName>
          <Styles.ProductPrice>{product.price}</Styles.ProductPrice>
          <Styles.Description>{product.description}</Styles.Description>
          <Styles.AddToCartButton>Adicionar ao carrinho</Styles.AddToCartButton>
        </Styles.Info>
      </Styles.Container>
    );
  };