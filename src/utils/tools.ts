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
