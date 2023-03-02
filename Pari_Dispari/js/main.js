//Definiamo le variabili

const pariDispari = prompt('Scegli pari o dispari');
console.log(pariDispari);

const scegliNumero = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log("Il numero scelto dall'utente è: " + scegliNumero);

let numeroCasuale = numeroDaGenerare();
console.log("Il numero scelto dal computer è: " + numeroCasuale);

const sommaNumeri = numeroCasuale + scegliNumero;
console.log("La somma è: " + sommaNumeri);

const risultatoPariDispari = numeroPariDispari(sommaNumeri);
console.log(risultatoPariDispari);

//Funzioni

function numeroDaGenerare(){

    const numero = Math.floor((Math.random() * 5 + 1));

    return numero;

};

function numeroPariDispari(numeroDaControllare) {

    let risultato = '';

    if ((numeroDaControllare % 2 == 0) && (pariDispari == 'pari')) {
        risultato = "Il numero è pari, vince l'utente!";
    } else if((numeroDaControllare % 2 !== 0) && (pariDispari == 'dispari')){
        risultato = "Il numero è dispari, vince l'utente";
    }else{
        risultato = "Vince il computer!";
    }
    return risultato;

}



