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
    }
);