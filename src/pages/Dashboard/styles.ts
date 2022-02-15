import styled from "styled-components";
import { Link } from "react-router-dom";
export const Conteiner = styled.div`
     ul {
          justify-content: center;
          padding: 10px;
          li {
               button,
               div {
                    color: ${(props) => props.theme.colorTitle};
               }
               .Mui-selected {
                    background-color: ${(props) =>
                         props.theme.backgroundSecondary} !important;
               }
               button:hover {
                    background-color: ${(props) =>
                         props.theme.background} !important;
               }
          }
     }
`;
export const Wrapper = styled.div`
     width: 100%;
     display: grid;
     grid-template-columns: 1fr 1fr 1fr 1fr;
     margin: 20px auto;
     border-radius: 15px;
     border: 1px solid ${(props) => props.theme.grey};
     padding: 1rem;
     gap: 16px 10px;
`;
export const Text = styled.p`
     color: ${(props) => props.theme.grey};
`;
export const BackButton = styled(Link)`
     display: flex;
     align-items: center;
     color: ${(props) => props.theme.primarry};
     :hover {
          opacity: 0.7;
          transition: 0.3s;
     }
`;
