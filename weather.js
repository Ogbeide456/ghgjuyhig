const apiKey = "8cdadcb9032a4348dfaa04d06f7e8c8c";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=8cdadcb9032a4348dfaa04d06f7e8c8c&units=metric";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
}
data = {
    "coord": {
        "lon": 3.3792,
        "lat": 6.5244
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 30.5,
        "feels_like": 34.5,
        "temp_min": 30.5,
        "temp_max": 30.5,
        "pressure": 1010,
        "humidity": 70
    },
    "visibility": 4000,
    "wind": {
        "speed": 3.09,
        "deg": 140
    },
    "clouds": {
        "all": 20
    },
    "dt": 1698352000,
    "sys": {
        "type": 1,
        "id": 1168,
        "country": "NG",
        "sunrise": 1698311237,
        "sunset": 1698354909
    },
    "timezone": 3600,
    "id": 23424908,
    "name": "Lagos",
    "cod": 200
};

document.querySelector(".city").innerHTML = data.name;

// Call the function to check the weather
checkWeather();

