import TextField from "@mui/material/TextField";
import { KeyboardEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setUrl } from "../../store/slices/urlSlice";
import { Conteiner } from "./styles";

export function Search() {
     const [search, setSearch] = useState("");
     const dispatch = useDispatch();
     const pokemon = useSelector((state: RootState) => state.pokemon.data);
     const url = useSelector((state: RootState) => state.apiUrl.url);
     function onKeyUp(event: KeyboardEvent<HTMLDivElement>) {
          if (event.charCode === 13) {
               dispatch(setUrl("/pokemon/" + search));
          }
     }
     return (
          <Conteiner>
               <TextField
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => onKeyUp(e)}
                    id="outlined-search"
                    label="Pesquisar pokémon"
                    type="search"
               />
          </Conteiner>
     );
}
