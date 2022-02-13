import styled from "styled-components";
interface ConteinerProps {
     backgroundColor: string;
}
export const Conteiner = styled.div<ConteinerProps>`
     max-width: 270px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     border-radius: 15px;
     padding: 15px;
     height: 100px;
     cursor: pointer;
     background: rgb(${(props) => props.backgroundColor})
          url("/src/assets/img/watermark-pokeball.svg") no-repeat scroll right
          center;

     :hover {
          opacity: 0.8;
     }
     > div {
          width: 160px;
          height: 100%;
          display: flex;
          justify-content: c;
          flex-direction: column;
          justify-content: space-between;
     }
     img {
          width: 100px;
     }
`;
export const NumberID = styled.div`
     color: rgba(0, 0, 0, 0.5);
     font-weight: bold;
`;
export const Name = styled.h2`
     font-size: 30px;
     font-weight: bold;
     color: rgb(255, 255, 255);
     text-transform: capitalize;
     text-shadow: rgba(150, 150, 150, 0.3) 1px 1px 2px;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
     max-width: 180px;
`;
export const DivTypes = styled.div<ConteinerProps>`
     display: flex;
     align-items: center;
     justify-content: space-between;
     border-radius: 15px;
     padding: 15px;
     height: 100px;
     cursor: pointer;
`;
export const Type = styled.span<ConteinerProps>`
     width: min-content;
     min-width: 35px;
     text-align: center;
     text-transform: capitalize;
     font-size: 14px;
     padding: 5px;
     border-radius: 5px;
     background: rgb(${(props) => props.backgroundColor});
     box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 4px 0px;
     color: ${(props) => props.theme.white};
     filter: saturate(300%);
`;
