import styled from 'styled-components';

export const Conteiner = styled.div`
  a {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.backgroundSecondary};
    color: ${(props) => props.theme.primarry};
    font-family: ${(props) => props.theme.font.fontFamily};
    font-weight: ${(props) => props.theme.font.regular};
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme.primarry};
      color: ${(props) => props.theme.black};
      transition: 0.5s;
    }
  }
`;
