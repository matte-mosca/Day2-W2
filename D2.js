/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const number1 = 4
const number2 = 6

if (number1 > number2) {
  console.log (number1, 'è maggiore di' ,number2)
} else{
  console.log(number2, 'è maggiore di' ,number1)
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let number3 = 16

if (number3 === 5){
  console.log ("Equal")
} else {
  console.log ("Not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let number4 = 20 

if (number4 % 5 === 0){
  console.log(number4,"è divisibile per 5")
} else{
  console.log(number4,"non è divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let number5 = 6
let number6 = 8

if (number5 === 8 || number6 === 8){
  console.log("Uno dei due numeri è uguale a 8")
} else {
  console.log("Nessuno dei due numeri è 8")
} if(number5 + number6 === 8){
  console.log("La somma dei due numeri è 8")
} else {
  console.log("La somma dei due numeri non è 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalCost = undefined
let articolo1 = 6
let articolo2 = 18
let articolo3 = 26
let totalShoppingCart = articolo1 + articolo2 + articolo3 
if (totalShoppingCart >= 50){
   totalCost = totalShoppingCart
} else {
  totalCost = totalShoppingCart + 10
}
console.log(totalShoppingCart)
console.log(totalCost)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalCost1 = undefined
let articolo11= 6
let articolo21 = 26
let articolo31 = 40
let totalShoppingCart1 = (articolo11 + articolo21 + articolo31)/100 * 80
if (totalShoppingCart1 >= 50){
   totalCost1 = totalShoppingCart1
} else {
  totalCost1 = totalShoppingCart1 + 10
}
console.log(totalShoppingCart1)
console.log(totalCost1)



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let variabile1 = 26
let variabile2 = 12
let variabile3 = 18

const elencoNumeri = [variabile1, variabile2, variabile3]
elencoNumeri.sort()
console.log(elencoNumeri)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let value = "stringa"
if (typeof value === 'number'){
  console.log(value, "è un numero")
} else {
  console.log (value, "non è un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let number = 10
if (number % 2 === 0){
  console.log(number,"è pari")
} else{
  console.log(number, "è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 3
  if (val < 10 && val > 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto"
console.log(me)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName 
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
