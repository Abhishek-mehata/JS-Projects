// importing html elements
const weatherContainer = document.querySelector(".weather-data");
const inputBox = document.getElementById("input");
const temperatureBox = document.getElementById("temp-data");
const tempImage = document.getElementById("logo");
const tempTip = document.getElementById("tip");
const tempDesc = document.querySelector(".weather-desc");

//PProgram variables
let icon = null;
let weatherDescription = null;
let tip = null;

// Function to fetch the data according to city name
const fetchData = async (cityName) => {
    try {
        const baseUrl = "b6dece846bbb74f864220bc44a524c54";
        const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${baseUrl}`;

        const response = await fetch(fetchUrl);
        const data = await response.json();

        const temperature = data.main.temp;
        const tempInCelscius = (k) => (k - 273.15).toFixed(1);
        // console.log(tempInCelscius(temperature))
        const temp = tempInCelscius(temperature);
        // console.log
        console.log(data)
        console.log(temp)

        //change icon,weather description,tip according to temperature
        if (temp < 10) {
            icon = "./assets/snow.svg";
            weatherDescription = "SNOWY WEATHER"
            tip = "Wear Heat Resistant Cloths and have warm foods"
        } else if (temp >= 10 && temp < 25) {
            icon = "./assets/cloudy.svg";
            weatherDescription = "CLOUDY WEATHER"
            tip = "Carry Umbrella While travelling and keep safe from Fever"
        } else if (temp >= 25 && temp < 35) {
            icon = "./assets/sunny.svg";
            weatherDescription = "SUNNY WEATHER"
            tip = "Drink plenty of water and Stay in cool place"
        } else {
            icon = "./assets/hot.svg"
            weatherDescription = "VERY HOT"
            tip = "Try to take fresh air , drink plenty of water and don't go in sun"
        }

        temperatureBox.textContent = temp;
        tempImage.src = icon;
        tempDesc.textContent = weatherDescription;
        tempTip.textContent = tip;
        weatherContainer.classList.toggle("fetched");
    } catch (error) {
        // return error;
        console.log(error)
    }
}





// const toCelsius = (k) => {
//     return (k - 273.15).toFixed(1);
// };


inputBox.addEventListener("keyup", (event) => {

    let cityName = null
    if (event.key === "Enter") {
        if (inputBox.value === '') {
            alert("Please Enter Valid City Name")
        } else {
            cityName = inputBox.value;
            // console.log(cityName)
            fetchData(cityName)
        }
    }
});
