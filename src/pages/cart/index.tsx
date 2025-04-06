import { useMemo } from "react";
import * as Styles from "./styles";

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
      <Styles.Container>
        <Styles.Title>Seu Carrinho</Styles.Title>
        <Styles.CartList>
          {cartItems.map((item) => (
            <Styles.CartItem key={item.id}>
              <Styles.ProductImage src={item.image} alt={item.name} />
              <Styles.Info>
                <Styles.Name>{item.name}</Styles.Name>
                <Styles.Price>{item.price}</Styles.Price>
              </Styles.Info>
            </Styles.CartItem>
          ))}
        </Styles.CartList>
        <Styles.Total>Total: R$ 289,80</Styles.Total>
      </Styles.Container>
    );
  };