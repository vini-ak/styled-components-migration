// src/components/Header.tsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const Logo = styled(Link)`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.rg};

  &:hover {
    text-decoration: underline;
  }
`;
