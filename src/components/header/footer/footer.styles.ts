// src/components/Footer.tsx
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.tertiary};
  padding: 1rem 2rem;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: #777;
  margin-top: auto;
  position: absolute;
  bottom: 0;
  width: 100vw;
`;
