let apiKey = "32b82645bebe8ce208716f37d041de7b";
let url = "http://api.weatherstack.com/current";

document.getElementById("item02-2").addEventListener("click", function () {
    let location = document.getElementById("item02-1").value;
    if (location === "") {
        alert("Please enter a location");
        return;
    }
    fetch(`${url}?access_key=${apiKey}&query=${location}`)
        .then(response => response.json())
        .then(data => {
            if (data.success === false) {
                alert("Invalid location or API error");
                return;
            }
            document.getElementById("item04-1").innerText = `${data.current.temperature}°C`;
            document.getElementById("item04-2").innerText = data.current.weather_descriptions[0];
            document.getElementById("item-5-1-2").innerText = `${data.current.feelslike}°C`;
            document.getElementById("item-5-2-2").innerText = `${data.current.humidity}%`;
            document.getElementById("item-5-3-2").innerText = `${data.current.wind_speed} km/h`;
            let weatherIcon = data.current.weather_icons[0] ? data.current.weather_icons[0] : "default-image-url.jpg";
            document.getElementById("item03-1").src = weatherIcon;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Failed to fetch weather data. Please try again later.");
        });
});