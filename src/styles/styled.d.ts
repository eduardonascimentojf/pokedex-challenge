import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    primarry: string;
    white: string;
    color: string;
    colorTitle: string;
    background: string;
    backgroundSecondary: string;
    backgroundBody: string;
    backgroundSiderBar: string;
    borderColor: string;
    grey: string;
    black: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    font: {
      fontFamily: string;
      regular: number;
      bold: number;
    };
  }
}
