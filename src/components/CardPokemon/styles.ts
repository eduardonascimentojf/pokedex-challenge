import styled from "styled-components";
interface ConteinerProps {
     backgroundColor: string;
}
export const Conteiner = styled.div<ConteinerProps>`
     background: rgb(${(props) => props.backgroundColor})
          url("/src/assets/img/watermark-pokeball.svg") no-repeat scroll right
          center;
     display: flex;
     align-items: center;
     border-radius: 15px;
     cursor: pointer;
     :hover {
          opacity: 0.8;
     }
`;
