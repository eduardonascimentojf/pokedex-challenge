import styled from "styled-components";

export const Conteiner = styled.div`
     flex: 1;
`;
export const Wrapper = styled.div`
     margin: 20px auto;
     border-radius: 5px;
     border: 1px solid ${(props) => props.theme.colorTitle};
     padding: 1rem;
     display: grid;
     grid-template-columns: 1fr 1fr 1fr 1fr;

     gap: 8px;
`;
