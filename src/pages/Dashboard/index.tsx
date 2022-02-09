import { useEffect, useState } from "react";
import { Text } from "../../components/Text";
import { api } from "../../services/api";
import { Conteiner } from "./styles";
interface props {
     url: string;
     id: number;
     name: string;
     sprites: {
          back_default: string;
     };
}
export function Dashboard() {
     const [pokemon, setPokemon] = useState([]);

     useEffect(() => {
          async function getItems() {
               const { data } = await api.get("/pokemon");

               const resp = await Promise.all(
                    data.results.map((item: props) => api.get(item.url))
               );
               const format: any = resp.map((req) => req.data);
               setPokemon(format);
          }

          getItems();
     }, []);
     console.log(pokemon);
     return (
          <Conteiner>
               <Text tag="h2">Dashboard</Text>
               <Text>
                    Search for Pokémon by name or using the National Pokédex
                    number
               </Text>
               {pokemon.length > 0 &&
                    pokemon.map((item: props) => (
                         <div key={item.id}>
                              {item.name}
                              <img
                                   src={item.sprites.back_default}
                                   alt={item.name}
                              />
                         </div>
                    ))}
          </Conteiner>
     );
}
