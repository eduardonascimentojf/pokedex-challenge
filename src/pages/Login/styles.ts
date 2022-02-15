import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackButton = styled(Link)`
     display: flex;
     align-items: center;
     color: ${(props) => props.theme.primarry};
     :hover {
          opacity: 0.7;
          transition: 0.3s;
     }
`;
