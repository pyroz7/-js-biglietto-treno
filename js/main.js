/* DOBBIAMO CHIEDERE ALL'UTENTE L'ETà E IL NUMERO DI CHILOMETRI CHE VUOLE PERCORRERE */


let age = prompt ("Età del passeggero");
let km  = prompt ("Chilometri da percorrere");



/* CALCOLARE IL PREZZO DEL BIGLIETTO */


let prizeTicket = Math.floor (km * 0.21) ;

/* CALCOLARE IL PREZZO DEL BIGLIETTO IN BASE AGLI SCONTI */
 
if (age < 18) {
    prizeTicket -= prizeTicket * 0.2;
}

else if (age > 65) {
    prizeTicket -= prizeTicket * 0.4;
}

/*PREZZO FINALE CON MASSIMO DUE DECINALI*/

let finalPrize= prizeTicket.toFixed(2); 


/*STAMP LOG*/ 

console.log("-------------- informazioni Passeggero --------------");
console.log("> Informazioni personali:" );
console.log("Età: " + age );
console.log("Chilometri da percorrere:" + km + "km");
console.log("Prezzo finale:" + finalPrize  + "euro" );
console.log("-------------------------------------------------------------");