// src/pages/Home.tsx
import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.lg};
  margin-bottom: 1.5rem;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

export const ProductCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 0 8px rgba(0,0,0,0.1);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ProductName = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.md};
  margin: 0.5rem 0;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  color: #2c3e50;
`;
