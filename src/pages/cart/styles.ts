// src/pages/CartPage.tsx
import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xg};
  margin-bottom: 2rem;
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #e0e0e0;
  padding: 1rem;
  border-radius: 8px;
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.md};
  margin-bottom: 0.25rem;
`;

export const Price = styled.p`
  font-weight: bold;
  color: #2c3e50;
`;

export const Total = styled.div`
  margin-top: 2rem;
  text-align: right;
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: bold;
`;

