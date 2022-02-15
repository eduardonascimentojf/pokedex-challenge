import { Box, Modal } from "@mui/material";
import { useState, useEffect } from "react";
import { colorByType, padDigits } from "../../utils/tools";
import { ModalDetailPokemon } from "../ModalDetailPokemon";
import * as T from "../../types";
import * as S from "./styles";

export function CardPokemon(props: T.IPokemonCard) {
     const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     const style = {
          transform: "translate(-50%, -50%)",
          position: "absolute",
          top: "50%",
          left: "50%",
          maxWidth: "600px",
          width: "100%",
          borderRadius: "35px",
     };
     return (
          <>
               <S.Conteiner
                    backgroundColor={colorByType(props.type)}
                    onClick={handleOpen}
               >
                    <div>
                         <S.NumberID># {padDigits(props.id)}</S.NumberID>
                         <S.Name>{props.name}</S.Name>
                         <S.Type backgroundColor={colorByType(props.type)}>
                              {props.type}
                         </S.Type>
                    </div>
                    <img src={props.img} alt={props.name} />
               </S.Conteiner>
               <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
               >
                    <Box sx={style}>
                         <ModalDetailPokemon id={props.arrayPosition} />
                    </Box>
               </Modal>
          </>
     );
}
