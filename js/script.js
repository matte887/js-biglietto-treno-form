// Variabili di base
const kmPrice = 0.21;

// Selezione tasto "Invia"
const confirmBtn = document.getElementById("confirm");
console.log(confirmBtn);
confirmBtn.addEventListener("click",
    function() {
        // Prelevo dati utente
        const userName = document.getElementById("username").value;
        console.log(userName);
        const travelDistance = document.getElementById("user-km").value;
        console.log(travelDistance);
        const passengerAge = document.getElementById("age").value;
        console.log(passengerAge);

        // Mostro i dati utente
        const nameResponse = document.getElementById("passenger");
        console.log(nameResponse);
        nameResponse.innerHTML = `${userName}`;

        const tariffResponse = document.getElementById("ticket-type");
        tariffResponse.innerHTML = `${passengerAge}`;

        // Mostrare il biglietto
        const ticket = document.querySelector(".your-ticket");
        ticket.classList.remove("d-none");

        // Calcola prezzo biglietto standard
        let ticketPrice;
        ticketPrice = travelDistance * kmPrice;
        console.log(ticketPrice);

        // Determina se i dati inseriti sono corretti
        if (isNaN(travelDistance)) {
            alert("I dati inseriti non sono corretti");
        } else {
            // Determina se il passeggero ha diritto ad uno sconto e applicalo
            if (passengerAge === "Tariffa Junior") {
                const juniorTicketPrice = ticketPrice - ((ticketPrice * 20)/100);
                console.log(juniorTicketPrice);
                ticketPrice = juniorTicketPrice;
            } else if (passengerAge === "Tariffa Senior") {
                const seniorTicketPrice = ticketPrice - ((ticketPrice * 40)/100);
                console.log(seniorTicketPrice);
                ticketPrice = seniorTicketPrice;
            }
        }

        // output
        document.getElementById('ticket-price').innerHTML = `€${ticketPrice.toFixed(2)}`;
    }
);