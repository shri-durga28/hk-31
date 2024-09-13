// Dummy data to simulate bus results
const buses = [
    {
        operator: "Luxury Travels",
        from: "City A",
        to: "City B",
        departureTime: "10:00 AM",
        arrivalTime: "2:00 PM",
        amenities: ["WiFi", "AC", "Reclining Seats"],
        price: "$25"
    },
    {
        operator: "Comfort Ride",
        from: "City A",
        to: "City B",
        departureTime: "12:00 PM",
        arrivalTime: "4:00 PM",
        amenities: ["WiFi", "AC"],
        price: "$20"
    },
    {
        operator: "Speedy Bus",
        from: "City A",
        to: "City B",
        departureTime: "2:00 PM",
        arrivalTime: "6:00 PM",
        amenities: ["AC", "Reclining Seats"],
        price: "$18"
    }
];

// Handling form submission
document.getElementById("bus-search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    displayBusResults();
});

// Function to display bus results dynamically
function displayBusResults() {
    const busList = document.getElementById("busResults");
    busList.innerHTML = ''; // Clear previous results

    buses.forEach(bus => {
        const busCard = `
            <div class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${bus.operator}</h5>
                        <p class="card-text">From: ${bus.from} | To: ${bus.to}</p>
                        <p>Departure: ${bus.departureTime} | Arrival: ${bus.arrivalTime}</p>
                        <p>Amenities: ${bus.amenities.join(', ')}</p>
                        <h6>Price: ${bus.price}</h6>
                    </div>
                </div>
            </div>
        `;
        busList.innerHTML += busCard;
    });
}
