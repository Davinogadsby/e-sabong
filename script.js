let bettingOpen = true; // Variable to track whether betting is open or closed
let odds = {
    cock1: 1.5,
    cock2: 2.0
};

// Update the betting odds on the page
function updateOdds() {
    const oddsText = `Cock 1: ${odds.cock1} | Cock 2: ${odds.cock2}`;
    document.getElementById("betting-odds").textContent = oddsText;
}

// Toggle betting status (open/closed)
function toggleBetting() {
    bettingOpen = !bettingOpen;
    const betStatusText = bettingOpen ? "Betting is currently Open." : "Betting is Closed.";
    document.getElementById("bet-status").textContent = betStatusText;
    document.getElementById("place-bet-btn").disabled = !bettingOpen;
}

// Simulate odds changing over time (for example, if you want to control them dynamically)
function changeOdds() {
    odds.cock1 = (Math.random() * 2) + 1.0; // Randomize odds between 1.0 and 3.0
    odds.cock2 = (Math.random() * 2) + 1.0;
    updateOdds();
}

// Set initial odds
updateOdds();

// Add event listener for button to toggle betting
document.getElementById("place-bet-btn").addEventListener("click", function() {
    if (bettingOpen) {
        alert("Bet placed!");
    }
});

// Automatically change the odds every 10 seconds (just for demo purposes)
setInterval(changeOdds, 10000);

// Toggle betting status every 20 seconds for demo purposes
setInterval(toggleBetting, 20000);
