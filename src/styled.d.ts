import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            darkBlue: string;
        },
        fontSizes: {
            sm: string;
            rg: string;
            md: string;
            lg: string;
            xg: string;
        }
    }
  }