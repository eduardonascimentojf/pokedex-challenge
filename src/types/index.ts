export interface IPokemon {
     url: string;
     id: number;
     name: string;
     types: [{ type: { name: string } }];
     sprites: {
          front_default: string;
     };
}
export interface IPokemonCard {
     name: string;
     id: number;
     img: string;
     type: string;
     arrayPosition: number;
}
export interface IPokemonModal extends IPokemon {
     abilities: [
          {
               ability: {
                    name: string;
               };
          }
     ];
     stats: [
          {
               base_stat: number;
               stat: {
                    name: string;
               };
          }
     ];
}
