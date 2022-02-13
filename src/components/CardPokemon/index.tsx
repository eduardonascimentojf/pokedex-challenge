import { Modal } from "@mui/material";
import { useState, useEffect } from "react";
import { padDigits } from "../../utils/tools";
import { ModalDetailPokemon } from "../ModalDetailPokemon";
import * as S from "./styles";
interface propsType {
     name: string;
     id: number;
     img: string;
     type: string;
}
export function CardPokemon(props: propsType) {
     const [color, setColor] = useState("");
     const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     useEffect(() => {
          switch (props.type) {
               case "poison":
                    setColor("159, 110, 151");
                    break;
               case "grass":
                    setColor("160, 200, 159");
                    break;
               case "fire":
                    setColor("255, 57, 42");
                    break;
               case "water":
                    setColor("88, 171, 246");
                    break;
               case "bug":
                    setColor("107, 158, 91");
                    break;
               case "normal":
                    setColor("181, 185, 196");
                    break;
               case "ground":
                    setColor("245, 119, 6");
                    break;
               case "electric":
                    setColor("242, 203, 85");
                    break;
               case "fairy":
                    setColor("235, 168, 195");
                    break;
               case "psychic":
                    setColor("255, 101, 104");
                    break;
               case "fighting":
                    setColor("235, 73, 113");
                    break;
               case "rock":
                    setColor("111, 110, 120");
                    break;
               case "ghost":
                    setColor("133, 113, 190");
                    break;
               case "ice":
                    setColor("145, 216, 223");
                    break;
               case "dragon":
                    setColor("115, 131, 185");
                    break;
               case "dark":
                    setColor("207, 196, 196");
                    break;
               case "steel":
                    setColor("76, 145, 178");
                    break;
               default:
                    setColor("116, 143, 201");
          }
     }, []);

     return (
          <>
               <S.Conteiner backgroundColor={color} onClick={handleOpen}>
                    <div>
                         <S.NumberID># {padDigits(props.id)}</S.NumberID>
                         <S.Name>{props.name}</S.Name>
                         <S.Type backgroundColor={color}>{props.type}</S.Type>
                    </div>
                    <img src={props.img} alt={props.name} />
               </S.Conteiner>
               <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
               >
                    <ModalDetailPokemon id={props.id} />
               </Modal>
          </>
     );
}
