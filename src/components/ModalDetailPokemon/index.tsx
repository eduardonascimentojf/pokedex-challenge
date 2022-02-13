import * as S from "./styles";
interface propsType {
     id: number;
}
export function ModalDetailPokemon(props: propsType) {
     return (
          <S.Conteiner>
               <p>{props.id}</p>
          </S.Conteiner>
     );
}
