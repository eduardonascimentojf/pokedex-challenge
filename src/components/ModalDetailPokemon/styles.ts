import styled from "styled-components";
interface ColorProps {
     backgroundColor: string;
}
export const Conteiner = styled.div`
     display: grid;
     grid-template-columns: auto auto;
     background: rgb(255, 255, 255) none repeat scroll 0% 0%;
     max-width: 600px;
     width: 100%;
     height: 500px;
     border-radius: 35px;
     overflow: hidden;
     flex-wrap: wrap;
     box-sizing: border-box;
`;
export const Left = styled.div<ColorProps>`
     background: rgb(${(props) => props.backgroundColor}) none repeat scroll 0%
          0%;
     padding: 50px 35px;
     text-align: center;
     position: relative;
     align-items: center;
     display: flex;
     flex-direction: column;
     ::before {
          position: absolute;
          z-index: 0;
          content: "";
          width: 100%;
          height: 100%;
          background-image: url("/src/assets/img/watermark-pokeball-large.svg");
          background-repeat: no-repeat;
          background-position: center top 106px;
          background-size: 100px;
          left: 0px;
          top: 0px;
          opacity: 0.1;
     }
     h2 {
          font-size: 30px;
          font-weight: bold;
          color: rgb(255, 255, 255);
          text-transform: capitalize;
          text-shadow: rgba(150, 150, 150, 0.3) 1px 1px 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 180px;
     }

     img {
          margin: 15px 0 35px;
     }
     ul {
          width: 100%;
          margin-top: 25px;
          display: grid;
          gap: 5px;
          grid-template-columns: 1fr;
          li {
               width: 100%;
               background: rgb(${(props) => props.backgroundColor}) none repeat
                    scroll 0% 0%;
               filter: saturate(300%);
               padding: 5px;
               color: rgb(255, 255, 255);
               border-radius: 5px;
               text-align: center;
          }
     }
`;

export const Right = styled.div<ColorProps>`
     padding: 50px 35px;
     text-align: center;
     position: relative;
     h6 {
          color: rgb(${(props) => props.backgroundColor});
          filter: saturate(300%);
     }
     ul {
          margin: 15px 0 35px;
          li {
               padding: 10px 0px;
               text-align: initial;
               color: ${(props) => props.theme.backgroundBody};
               span.MuiLinearProgress-root {
                    background-color: ${(props) => props.theme.grey};
                    span {
                         background-color: rgb(
                              ${(props) => props.backgroundColor}
                         );
                         filter: saturate(300%);
                    }
               }
          }
     }
`;
export const Text = styled.h6`
     font-size: 20px;
     font-weight: bold;
     color: rgb(255, 255, 255);
     text-transform: capitalize;
     text-shadow: rgba(150, 150, 150, 0.3) 1px 1px 2px;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
     max-width: 180px;
`;
