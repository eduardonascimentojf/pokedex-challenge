export function padDigits(number: number | string) {
     if (Number(number) <= 99) {
          number = `00${number}`.slice(-3);
     }
     return number;
}
