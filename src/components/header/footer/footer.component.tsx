import * as Styles from "./footer.styles";

export const Footer = () => {
    return (
      <Styles.FooterContainer>
        &copy; {new Date().getFullYear()} MinhaLoja. Todos os direitos reservados.
      </Styles.FooterContainer>
    );
  };
  