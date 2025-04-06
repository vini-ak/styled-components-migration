import { AppPaths } from "../../../common/paths";
import * as Styles from "./header.styles";

export const Header = () => {
    return (
      <Styles.HeaderContainer>
        <Styles.Logo to={AppPaths.home}>MinhaLoja</Styles.Logo>
        <Styles.Nav>
          <Styles.NavLink to={AppPaths.home}>Home</Styles.NavLink>
          <Styles.NavLink to={AppPaths.cart}>Carrinho</Styles.NavLink>
        </Styles.Nav>
      </Styles.HeaderContainer>
    );
  };
  