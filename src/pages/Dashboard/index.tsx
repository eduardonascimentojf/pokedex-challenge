import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { CardPokemon } from "../../components/CardPokemon";
import { Text } from "../../components/Text";
import { api } from "../../services/api";
import * as S from "./styles";
import { formatTotalPages, formatUrl } from "../../utils/tools";
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
     const [page, setPage] = useState(1);
     const [totalPages, setTotalPages] = useState(1);
     const [url, setUrl] = useState("/pokemon?offset=0&limit=20");
     const handleChange = (page: number) => {
          setPage(page);
     };
     useEffect(() => {
          async function getUrl() {
               const tetstst = await formatUrl(page);
               console.log(tetstst);
               setUrl(tetstst);
          }
          getUrl();
     }, [page]);

     useEffect(() => {
          async function getItems() {
               const { data } = await api.get(url);

               const resp = await Promise.all(
                    data.results.map((item: props) => api.get(item.url))
               );
               const format: any = resp.map((req) => req.data);
               const allPage = await formatTotalPages(data.count);
               setTotalPages(allPage);
               setPokemon(format);
          }

          getItems();
     }, [, url]);
     console.log(pokemon);
     return (
          <S.Conteiner>
               <Text tag="h2">Dashboard</Text>
               <S.Text>
                    Search for Pokémon by name or using the National Pokédex
                    number
               </S.Text>
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
               <Pagination
                    onChange={(e, page) => handleChange(page)}
                    count={totalPages}
                    page={page}
                    showFirstButton
                    showLastButton
               />
          </S.Conteiner>
     );
}
