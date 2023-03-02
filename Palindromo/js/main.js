
/*
//1 Metodo trovato
//Definisco le variabili

const richiestaParola = prompt('Inserisci una parola, verificheremo se sia palindroma');
console.log(richiestaParola);

let richiestaParolaDivisa = richiestaParola.split('');
console.log(richiestaParolaDivisa);

let richiestaParolaInvertita = richiestaParolaDivisa.reverse();
console.log(richiestaParolaDivisa);

let richiestaParolaUnita = richiestaParolaDivisa.join('');
console.log(richiestaParolaUnita);

//Predispongo la condizione per verificare la palindromia

if(richiestaParola == richiestaParolaUnita){
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}*/

/*
//2 metodo trovato
//Definisco le variabili

const richiestaParola = prompt('Inserisci una parola, verificheremo se sia palindroma');
console.log(richiestaParola);

let richiestaParolaInvertita = invertiParola(richiestaParola);

//Predispongo la condizione per verificare la palindromia

if(richiestaParola == richiestaParolaInvertita){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }

//Predispongo la funzione di inversione
  
function invertiParola(parola){
  let parolaInversa = parola.split('').reverse().join('');  
  return parolaInversa;
}
*/

//3 metodo trovato
//Definisco le variabili

const richiestaParola = prompt('Inserisci una parola, verificheremo se sia palindroma');
console.log(richiestaParola);

let parolaInvertita = invertire(richiestaParola)
console.log(parolaInvertita)

//Predispongo la funzione di inversione

function invertire (parolaRichista) {
    if (parolaRichista === "") {
        return "";
    } else {
        return invertire(parolaRichista.substr(1)) + parolaRichista.charAt(0);
    }
}

//Predispongo la condizione per verificare la palindromia

if(richiestaParola == parolaInvertita){
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}


