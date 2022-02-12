import { useEffect, useState } from "react";
import { CardPokemon } from "../../components/CardPokemon";
import { Text } from "../../components/Text";
import { api } from "../../services/api";
import * as S from "./styles";
interface props {
     url: string;
     id: number;
     name: string;
     types: [{ type: { name: string } }];

     sprites: {
          front_default: string;
     };
}
export function Dashboard() {
     const [pokemon, setPokemon] = useState<props[]>([]);

     useEffect(() => {
          async function getItems() {
               const { data } = await api.get("/pokemon?offset=0&limit=20");

               const resp = await Promise.all(
                    data.results.map((item: props) => api.get(item.url))
               );
               const format: any = resp.map((req) => req.data);
               setPokemon(format);
          }

          getItems();
     }, []);
     // console.log(pokemon[3]);
     return (
          <S.Conteiner>
               <Text tag="h2">Dashboard</Text>
               <Text>
                    Search for Pokémon by name or using the National Pokédex
                    number
               </Text>
               <S.Wrapper>
                    {pokemon.length > 0 &&
                         pokemon.map((item: props) => (
                              <CardPokemon
                                   key={item.id}
                                   id={item.id}
                                   name={item.name}
                                   img={item.sprites.front_default}
                                   type={item.types[0].type.name}
                              />
                         ))}
               </S.Wrapper>
          </S.Conteiner>
     );
}
