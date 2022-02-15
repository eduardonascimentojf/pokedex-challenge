import * as S from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { setPokemon } from "../../store/slices/pokemonSlice";
import { RootState } from "../../store/store";
import { useState } from "react";
import {
     colorByType,
     formatTextToCapitalizeWithTrace,
} from "../../utils/tools";
import LinearProgress from "@mui/material/LinearProgress";
interface propsType {
     id: number;
}
export function ModalDetailPokemon(props: propsType) {
     const pokemon = useSelector((state: RootState) => state.pokemon.data);
     const pokemonItem = pokemon[props.id];
     const [firstType, setFirstType] = useState(
          colorByType(pokemonItem.types[0].type.name)
     );
     return (
          <S.Conteiner>
               <S.Left backgroundColor={firstType}>
                    <h2>{pokemonItem.name}</h2>
                    <img
                         src={pokemonItem.sprites.front_default}
                         alt={pokemonItem.name}
                    />
                    <S.Text>Abilities</S.Text>
                    <ul>
                         {pokemonItem.abilities.length > 0 &&
                              pokemonItem.abilities.map((item, index) => (
                                   <li key={index}>{item.ability.name}</li>
                              ))}
                    </ul>
               </S.Left>
               <S.Right backgroundColor={firstType}>
                    <S.Text>Base Stats</S.Text>
                    <ul>
                         {pokemonItem.stats.length > 0 &&
                              pokemonItem.stats.map((item, index) => (
                                   <li key={index}>
                                        {formatTextToCapitalizeWithTrace(
                                             item.stat.name
                                        )}{" "}
                                        {item.base_stat}
                                        <LinearProgress
                                             valueBuffer={1}
                                             sx={{
                                                  width: 200,
                                                  mb: 2,
                                             }}
                                             variant="determinate"
                                             value={item.base_stat}
                                        />
                                   </li>
                              ))}
                    </ul>
               </S.Right>
          </S.Conteiner>
     );
}
