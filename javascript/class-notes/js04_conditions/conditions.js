// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

//**************** IF-ELSE *******************

console.log("****** CONDITIONS *******");

//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//? yada 0 oldugunu tespit ederek yazdiriniz.

// const sayi = Number(prompt("Bir sayi giriniz:"));
// if (sayi > 0) {
//   console.log(`${sayi} pozitiftir.`);
// } else if (sayi == 0) {
//   console.log(`${sayi}'a esittir.`);
// } else {
//   console.log(`${sayi} negatiftir.`);
// }
// console.log(sayi, typeof sayi);

//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.
const n1 = +prompt("Sayi1:");
const n2 = +prompt("Sayi2:");
const n3 = +prompt("Sayi3:");

//* 1.Yontem
// if (n1 >= n2 && n1 >= n3) {
//   console.log(`${n1} en buyuk sayidir`);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log(`${n2} en buyuk sayidir`);
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log(`${n3} en buyuk sayidir`);
// }

//* 2.Yontem
let enBuyuk = n1;

if (n2 >= enBuyuk) {
  enBuyuk = n2;
}
if (n3 >= enBuyuk) {
  enBuyuk = n3;
}
console.log(`${enBuyuk} en buyuktur`);

//? ODEV1: Dort Islem Hesap Makinasi
