import { useEffect, useState } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import { CardPokemon } from "../../components/CardPokemon";
import { Text } from "../../components/Text";
import { api } from "../../services/api";
import * as S from "./styles";
import { formatTotalPages, formatUrl } from "../../utils/tools";
import * as T from "../../types";

import { useSelector, useDispatch } from "react-redux";
import { resetPokemon, setPokemon } from "../../store/slices/pokemonSlice";
import { setUrl } from "../../store/slices/urlSlice";

import { RootState } from "../../store/store";
import { Search } from "../../components/Search";
import { Pagination } from "@mui/material";

export function Dashboard() {
     const dispatch = useDispatch();
     const pokemon = useSelector((state: RootState) => state.pokemon.data);
     const url = useSelector((state: RootState) => state.apiUrl.url);
     const [page, setPage] = useState(1);
     const [totalPages, setTotalPages] = useState(1);
     const handleChange = (page: number) => {
          setPage(page);
     };
     useEffect(() => {
          async function getUrl() {
               const urlFormat = await formatUrl(page);
               dispatch(setUrl(urlFormat));
          }
          getUrl();
     }, [page]);

     useEffect(() => {
          async function getItems() {
               try {
                    const { data } = await api.get(url);
                    if (!data.results && data) {
                         setTotalPages(1);
                         const arrayPokemon = [];
                         arrayPokemon.push(data);
                         dispatch(setPokemon(arrayPokemon));
                    } else {
                         const resp = await Promise.all(
                              data.results.map((item: T.IPokemonModal) =>
                                   api.get(item.url)
                              )
                         );
                         const format: any = resp.map((req) => req.data);
                         const allPage = await formatTotalPages(data.count);
                         setTotalPages(allPage);
                         dispatch(setPokemon(format));
                    }
               } catch (error) {
                    dispatch(resetPokemon());
                    setPage(0);
                    setTotalPages(0);
               }
          }
          getItems();
     }, [, url]);
     return (
          <S.Conteiner>
               <S.Header>
                    <div>
                         <S.BackButton to="/">
                              <ArrowBackIosNew /> Voltar
                         </S.BackButton>
                         <Text tag="h2">Dashboard</Text>
                         <S.Text>
                              Procure Pokémon pelo nome ou usando o número
                              National Pokédex
                         </S.Text>
                    </div>
                    <Search />
               </S.Header>
               <S.Wrapper>
                    {pokemon.length > 0 ? (
                         pokemon.map((item, index) => (
                              <CardPokemon
                                   key={item.id}
                                   id={item.id}
                                   name={item.name}
                                   img={item.sprites.front_default}
                                   type={item.types[0].type.name}
                                   arrayPosition={index}
                              />
                         ))
                    ) : (
                         <p>Nenhuma busaca encontrada</p>
                    )}
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
