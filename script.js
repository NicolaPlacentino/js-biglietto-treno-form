/* Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto
di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente
due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo
un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo
finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina*/

// 1. Prendere l'elemento nel DOM
// 2. Prendere i valori degli input quando 'button' viene cliccato
// 3. Calcolare il prezzo base del biglietto
// 4. Calcolare il prezzo scontato per minorenni e over 65 se necessario
// 4b. (Bonus)
// 5. Stampare il biglietto
const inputText = document.getElementById('user-name');
const inputNumber = document.getElementById('user-trip');
const selectElement = document.getElementById('user-age'); 


const button = document.getElementById('button');
const reset = document.getElementById('reset');

button.addEventListener('click', function (){
    const userName = inputText.value.trim();
    const tripDistance = inputNumber.value;
    const userAge = selectElement.value;
    console.log(userName, userAge, tripDistance);

    const basePrice = tripDistance * 0.21
    let finalPrice = basePrice

    if(userAge === 'junior'){
        finalPrice = basePrice - basePrice * 0.2
    } else if(userAge === 'senior'){
        finalPrice = basePrice - basePrice * 0.4
    }
    console.log(finalPrice)
});
