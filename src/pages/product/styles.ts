// src/pages/ProductPage.tsx
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
`;

export const ImageWrapper = styled.div`
  flex: 1;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xg};
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: bold;
  color: #27ae60;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.rg};
  color: #555;
  margin-bottom: 2rem;
`;

export const AddToCartButton = styled.button`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-size: ${(props) => props.theme.fontSizes.rg};
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkBlue};
  }
`;
