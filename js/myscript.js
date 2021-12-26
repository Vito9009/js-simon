/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

let randomNumberArray = [];
let randomNumber;

let promptNumberArray = [];
let promptNumber;

let min = 1;
let max = 100;

let numbers = document.getElementById("numbers");
let container = document.getElementById("container");

function randomNumberGeneratorFunction (min, max) {                   // Funzione per generare numeri casuali
  return Math.floor(Math.random() * (max - min)) + min;
}

while (randomNumberArray.length<5) {                                // Genera numeri cassuali 
    let duplicateNumberCheck = false;
    randomNumber = Math.floor(Math.random() * (max - min)) + min;
    console.log(randomNumber);
  
    for (let i=0; i<randomNumberArray.length; i++) {
      if (randomNumber == randomNumberArray[i]) {
        duplicateNumberCheck = true;
        console.log("Duplicate Number Check: " + "Questo numero " + "(" + randomNumber + ")" + " è già presente. Ne genero un altro e lo inserisco nell'array");
      }
    } 
  
    if (duplicateNumberCheck == false) {
        randomNumberArray.push(randomNumber);
    }
  } 
console.log(randomNumberArray);
numbers.innerHTML += ("Guarda bene questi numeri e memorizzali: " + randomNumberArray);

setTimeout(function() {           //Fai sparire i numeri da ricordare poco prima del lancio del prompt
  container.style.display="none";
}, 29900);


setTimeout(function() {                                               // Dopo 30 secondi apri i prompt per l'inserimento dei numeri
  for (let i=0; i<5; i++) {
    promptNumber = parseInt(prompt("Inserisci uno alla volta i numeri che hai visto"));

    for (let i=0; i<randomNumberArray.length; i++) {                  // Alert se viene inserito un numero non valido
        if(promptNumber > max || promptNumber < min){
            alert("Il numero inserito non è valido.");
            promptNumber = parseInt(prompt("Inserisci uno alla volta i numeri che hai visto"));
        }
    }
    for (let i=0; i<randomNumberArray.length; i++) {
        if(promptNumber == randomNumberArray[i]){
            promptNumberArray.push(promptNumber);
        }
    }
} 

  container.style.display="block";

  numbers.innerHTML = ("Hai indovinato " + promptNumberArray.length + " numeri (" + promptNumberArray + ")");
  console.log(promptNumberArray);
}, 30000);