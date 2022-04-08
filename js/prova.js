// Chiedere al passeggero età e km necessari

console.log(travelDistance, typeof(travelDistance), passengerAge, typeof(passengerAge));

// Calcola prezzo biglietto standard
let ticketPrice;
ticketPrice = travelDistance * kmPrice;
console.log(ticketPrice);

// Determina se i dati inseriti sono corretti
if (isNaN(travelDistance) || isNaN(passengerAge)) {
    alert("I dati inseriti non sono corretti");
} else {
    // Determina se il passeggero ha diritto ad uno sconto e applicalo
    if (passengerAge < 18) {
        const juniorTicketPrice = ticketPrice - ((ticketPrice * 20)/100);
        console.log(juniorTicketPrice);
        ticketPrice = juniorTicketPrice;
    } else if (passengerAge >= 65) {
        const seniorTicketPrice = ticketPrice - ((ticketPrice * 40)/100);
        console.log(seniorTicketPrice);
        ticketPrice = seniorTicketPrice;
    }
}

console.log(ticketPrice);

// output
document.getElementById('ticket-price').innerHTML = `${ticketPrice.toFixed(2)}€`;