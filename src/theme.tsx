import { createGlobalStyle, DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
    colors: {
        primary: '#2c3e50',
        secondary: '#fff',
        tertiary: '#f0f0f0',
        darkBlue: '#34495e',
    },
    fontSizes: {
        sm: "0.9rem",
        rg: "1rem",
        md: "1.2rem",
        lg: "1.5rem",
        xg: "2rem",
    }
}

interface ThemeProps {
    children: React.ReactNode;
}

export const Theme = ({ children }: ThemeProps) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

export const GlobalStyle = createGlobalStyle`
  * {
    // reset styles
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    // sets font-family
    font-family: 'Poppins', sans-serif;
  }
`
