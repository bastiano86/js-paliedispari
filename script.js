console.log("ciao");

// creo la funzione che chiamerĂ² trovaPalindromo
function trovaPalindromo(stringa){
    let parolaInvertita = stringa.split("").reverse().join("")
    return stringa === parolaInvertita;
  }

// chiedo una parola
let parolaUno = prompt('scrivi una parola')
 
console.log( trovaPalindromo(parolaUno) );

  // chiedo un numero da 1 a 5
  let numeroUtente = prompt('scrivi un numero da 1 a 5');

  console.log(numeroUtente);
 
// creo la funzione che chiamerĂ² trovaPalindromo
function giocaComputer(a,b) {
       return Math.random() * parseInt((1 - 5) + 1);
    }

let numeroComputer = (giocaComputer());

console.log(giocaComputer());
