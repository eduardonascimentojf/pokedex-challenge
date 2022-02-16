import styled from "styled-components";

export const Conteiner = styled.div`
     width: 40%;
     fieldset,
     label,
     div {
          width: 100%;
          color: ${(props) => props.theme.colorTitle};
          border-color: ${(props) => props.theme.colorTitle};
     }
`;
