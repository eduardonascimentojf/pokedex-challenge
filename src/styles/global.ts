import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
     margin: 0;
    padding: 0;
}
body{
     max-width: 1200px;
     margin: auto;
     background-color: ${(props) => props.theme.backgroundBody};
     color: ${(props) => props.theme.color};
     font-family: ${(props) => props.theme.font.fontFamily};
     padding: 35px 0;
}
h1, h2, h3, h4, h5, h6 {
  font-weight: bold !important;
  font-family: "Montserrat", sans-serif !important;
}
a{
     text-decoration: none;
}
li{
     list-style: none;
}
input:focus {
    outline: none;
}
::placeholder{
     color:  ${(props) => props.theme.grey};
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
`;
