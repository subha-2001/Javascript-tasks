
function validZipcode() {
    const zipcode=document.getElementById("zipcode").value;
    if(!zipcode.trim()) {
        result.textContent="Please provide any US Zipcode!";
        result.style.color="red";
        return;
    }
    if((/^\d{5}$/.test(zipcode))) {
    fetch(`https://ziptasticapi.com/${zipcode}`) 
    .then(response=>response.json())
    .then(data=> {
        document.getElementById("country").textContent=`Country:${data.country}`;
        document.getElementById("city").textContent=`City:${data.city}`;
        document.getElementById("state").textContent=`State:${data.state}`;
    const mapDiv=document.getElementById("map");
    mapDiv.innerHTML=`<a href="https://www.google.com/maps/place/${data.country},${data.state},${zipcode}" target="_blank">View on Google Maps</a>`;
    })
    .catch(error => console.error(error));
}
else {
    document.getElementById("result").textContent="The given zipcode is invalid";

    result.style.color="red";}
}
document.querySelector('#resetbtn').addEventListener('click', function () {
    // Clear result and error messages
    document.getElementById("result").style.display = "none";
    document.getElementById("error-message").style.display = "none";
});
