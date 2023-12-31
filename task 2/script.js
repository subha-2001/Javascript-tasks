// Add a boolean flag to track whether an API call is in progress
let isAPICallInProgress = false;

//Validates and retrieves location information for a US zipcode.
function validZipcode() {
    if (isAPICallInProgress) {
        return; // If an API call is already in progress, do nothing
    }

    const zipcode = document.getElementById("zipcode").value;
    const result = document.getElementById("result");
    if (!zipcode.trim()) {
        result.textContent = "Please provide any US Zipcode!";
        result.style.color = "red";
        return;
    }
    if (/^\d{5}$/.test(zipcode)) {
        // Clear any previous result or error messages
        result.innerHTML = "";
         // Set the flag to indicate that an API call is in progress
        isAPICallInProgress = true;

        fetch(`https://ziptasticapi.com/${zipcode}`)
            .then(response => response.json())
            .then(data => {
                const { country, city, state } = data;
                if (country && state && city) {
                    result.innerHTML = `
                        <p>Country: ${country}</p>
                        <p>State: ${state}</p>
                        <p>City: ${city}</p>
                        <div id="map">
                            <a href="https://www.google.com/maps/place/${country},${state},${zipcode}" target="_blank">View on Google Maps</a>
                        </div>
                    `;
                    result.style.color = 'grey';
                } else {
                    result.textContent = "Location information is missing or undefined.";
                    result.style.color = "red";
                }
            })
            .catch(error => {
                result.textContent = "An error occurred while fetching data.";
                result.style.color = "red";
                console.error(error);
            })
            .finally(() => {
                // Reset the flag to indicate that the API call has completed
                isAPICallInProgress = false;
            });
    } else {
        result.textContent = "The given zipcode is invalid. Please provide a valid 5-digit US zipcode.";
        result.style.color = "red";
    }
}
// Clears the result content and enables the submit button.
document.querySelector('#resetbtn').addEventListener('click', function () {
    document.getElementById("result").innerHTML = "";
    document.getElementById("zipcode").value = "";
    document.getElementById("submitbtn").disabled = false;
});
// Attach the validZipcode function to the submit button click event.
document.querySelector('#submitbtn').addEventListener('click', validZipcode);
