export function padDigits(number: number | string) {
     if (Number(number) <= 99) {
          number = `00${number}`.slice(-3);
     }
     return number;
}

export async function formatTotalPages(itens: number) {
     const pages = itens / 20;
     return Math.ceil(pages);
}

export async function formatUrl(page: number) {
     const offset = page * 20 - 20;
     const url = `/pokemon?offset=${offset}&limit=20`;
     return url;
}

export function formatTextToCapitalizeWithTrace(value: string) {
     const text = value
          .toLocaleLowerCase()
          .split("-")
          .map((l) => l.charAt(0).toUpperCase() + l.substring(1))
          .join(" ");

     return text;
}
export function colorByType(value: string) {
     switch (value) {
          case "poison":
               return "159, 110, 151";
          case "grass":
               return "160, 200, 159";
          case "fire":
               return "255, 57, 42";
          case "water":
               return "88, 171, 246";
          case "bug":
               return "107, 158, 91";
          case "normal":
               return "181, 185, 196";
          case "ground":
               return "245, 119, 6";
          case "electric":
               return "242, 203, 85";
          case "fairy":
               return "235, 168, 195";
          case "psychic":
               return "255, 101, 104";
          case "fighting":
               return "235, 73, 113";
          case "rock":
               return "62, 28, 0";
          case "ghost":
               return "133, 113, 190";
          case "ice":
               return "145, 216, 223";
          case "dragon":
               return "115, 131, 185";
          case "dark":
               return "207, 196, 196";
          case "steel":
               return "76, 145, 178";
          default:
               return "116, 143, 201";
     }
}
