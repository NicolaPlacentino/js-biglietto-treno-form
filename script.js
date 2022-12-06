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

const insertName = document.getElementById('insert-name')
const insertTicket = document.getElementById('insert-ticket')
const insertWagon = document.getElementById('insert-wagon')
const insertCode = document.getElementById('insert-code')
const insertPrice = document.getElementById('insert-price')
const discount = document.getElementById('discount')

button.addEventListener('click', function (){
    const userName = inputText.value.trim();
    const tripDistance = inputNumber.value;
    const userAge = selectElement.value;
    console.log(userName, userAge, tripDistance);

    if (userName === '' || tripDistance === ''){
        alert('I dati inseriti non sono completi')
    } else {
            
        const basePrice = tripDistance * 0.21;
        let finalPrice = basePrice;
        

        let discounted = false;

        if(userAge === 'junior'){
            finalPrice = basePrice - basePrice * 0.2
            discounted = true

        } else if(userAge === 'senior'){
            finalPrice = basePrice - basePrice * 0.4
            discounted = true
        }
        console.log(finalPrice);
        
        
        const random = Math.random();
        
        const randomCode = Math.floor(random * (99999 - 10000 + 1)) + 10000;
        
        const randomWagon = Math.floor(random * 10) + 1;
        
    
        insertName.innerText = userName;
        insertTicket.innerText = 'Biglietto ' + userAge;
        insertWagon.innerText = randomWagon
        insertCode.innerText = randomCode
        insertPrice.innerText = '€' + finalPrice.toFixed(2);
        if(discounted){
            discount.innerText = '€' + basePrice.toFixed(2)
        }
    }
});

reset.addEventListener('click', function (){
    inputText.value = ''
    inputNumber.value = ''
    selectElement.value = ''
});