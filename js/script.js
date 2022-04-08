// Variabili di base
const kmPrice = 0.21;

// Selezione tasto "Invia"
const confirmBtn = document.getElementById("confirm");
console.log(confirmBtn);
confirmBtn.addEventListener("click",
    function() {
        // Prelievo dati utente
        const userName = document.getElementById("username").value;
        console.log(userName);
        const travelDistance = document.getElementById("user-km").value;
        console.log(travelDistance);
        const passengerAge = document.getElementById("age").value;
        console.log(passengerAge);

        // Riportare dati nel biglietto
        const nameResponse = document.getElementById("passenger");
        console.log(nameResponse);
        nameResponse.innerHTML = `${userName}`;

        const tariffResponse = document.getElementById("ticket-type");
        tariffResponse.innerHTML = `${passengerAge}`;

        // Mostrare il biglietto
        const ticket = document.querySelector(".your-ticket");
        ticket.classList.remove("d-none");

        // Calcolare prezzo biglietto standard
        let ticketPrice;
        ticketPrice = travelDistance * kmPrice;
        console.log(ticketPrice);

        // Determinare se i dati inseriti sono corretti
        if (isNaN(travelDistance)) {
            alert("I dati inseriti non sono corretti");
        } else {
            // Determinare se il passeggero ha diritto ad uno sconto e applicalo
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

        // Generare numero carrozza (random da 1 a 12)
        document.getElementById("train-car").innerHTML = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;

        // Generare numero carrozza (random da 90000 a 99999)
        document.getElementById("code").innerHTML = Math.floor(Math.random() * (99999 - 90000 + 1) ) + 90000;
    }
);

const clearBtn = document.getElementById("clear");
console.log(clearBtn);

clearBtn.addEventListener("click",
    function() {
        // Nascondere biglietto
        const ticket = document.querySelector(".your-ticket");
        ticket.classList.add("d-none");

        // Ripulire i campi
        const userName = document.getElementById("username");
        userName.value = "";

        const travelDistance = document.getElementById("user-km");
        travelDistance.value = "";
        
        const passengerAge = document.getElementById("age");
        passengerAge.value = "";
    }
)