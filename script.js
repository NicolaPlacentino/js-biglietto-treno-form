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
// 2. Chiedere numero di chilometri da percorrere e l'età
// 3. Calcolare il prezzo base del biglietto
// 4. Calcolare il prezzo scontato per minorenni e over 65
// 5. Stabilire il prezzo giusto a seconda delle condizioni dell'utente
// 6. Stampare il prezzo finale nel DOM

const inputText = document.getElementById('user-name')
const inputNumber = document.getElementById('user-trip')
const selectElement = document.getElementById('user-age') 





/* 
//const targetElement = document.getElementById('target')

// const tripDistance = parseInt(prompt('Quanti chilometri devi percorrere?', 100).trim())

// const userAge = parseInt(prompt('Quanti anni hai?', 18).trim())

// if(isNaN(tripDistance) || isNaN(userAge)){
//     alert('Attenzione! Puoi inserire solo valori numerici.')
// } else {
//     const basePrice = tripDistance * 0.21
//     console.log(basePrice)
  
//     let finalPrice = basePrice;

//     if(userAge < 18){
//         finalPrice = basePrice - basePrice * 0.2
//     } else if(userAge >= 65){
//         finalPrice = basePrice - basePrice * 0.4
//     }
//     console.log(finalPrice)

//     targetElement.innerText = finalPrice.toFixed(2) + '€'
// }
*/