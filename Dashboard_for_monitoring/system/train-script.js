// Dummy data to simulate train results
const trains = [
    {
        operator: "Express Railways",
        from: "City X",
        to: "City Y",
        departureTime: "9:00 AM",
        arrivalTime: "1:00 PM",
        amenities: ["WiFi", "AC", "Dining Car"],
        price: "$40"
    },
    {
        operator: "National Rail",
        from: "City X",
        to: "City Y",
        departureTime: "11:00 AM",
        arrivalTime: "3:00 PM",
        amenities: ["WiFi", "AC"],
        price: "$35"
    }
];

// Handling form submission
document.getElementById("train-search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    displayTrainResults();
});

// Function to display train results dynamically
function displayTrainResults() {
    const trainList = document.getElementById("trainResults");
    trainList.innerHTML = ''; // Clear previous results

    trains.forEach(train => {
        const trainCard = `
            <div class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${train.operator}</h5>
                        <p class="card-text">From: ${train.from} | To: ${train.to}</p>
                        <p>Departure: ${train.departureTime} | Arrival: ${train.arrivalTime}</p>
                        <p>Amenities: ${train.amenities.join(', ')}</p>
                        <h6>Price: ${train.price}</h6>
                    </div>
                </div>
            </div>
        `;
        trainList.innerHTML += trainCard;
    });
}
