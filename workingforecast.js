let temperature = 0;
let degreeCount = "°C";
let celsius = true;

class storeweather{
    constructor(name,coordlat,coordlon,temperature,actualtemp,humidity,tempmin,tempmax,weather,description,icon,wind,sunrise,sunset,humanDateFormat,humanDateFormat2){
        this.name = name;
        this.coordlat = coordlat;
        this.coordlon = coordlon;
        this.temperature = temperature;
        this.actualtemp = actualtemp;
        this.humidity = humidity;
        this.tempmin = tempmin;
        this.tempmax = tempmax;
        this.weather = weather;
        this.description = description;
        this.icon = icon;
        this.wind = wind;
        this.sunrise = sunrise;
        this.sunset = sunset;
        this.humanDateFormat = humanDateFormat;
        this.humanDateFormat2 = humanDateFormat2;
    }

}
function displayWeather(input) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=metric&appid=dbe735587bad3551fa97c03750d20f1c";
    fetch(url, {}).then(response => {
        return response.json();                 //now return that promise to JSON
    }).then(response => {
        console.log(response);
        let name = (response["name"]);
        let coordlat = (response["coord"]["lat"]);
        let coordlon = (response["coord"]["lon"]);
        temperature = (response["main"]["feels_like"]);
        console.log(temperature);
        let actualtemp = (response["main"]["temp"]+ "°C");
        let humidity = (response["main"]["humidity"]+ "%");
        let tempmin = (response["main"]["temp_min"]+ "°C");
        let tempmax = (response["main"]["temp_max"]+ "°C");
        let weather = (response["weather"]["0"]["main"]);
        let description = (response["weather"]["0"]["description"]);
        let icon = (response["weather"]["0"]["icon"]);
        let wind = (response["wind"]["speed"]);
        let sunrise = (response["sys"]["sunrise"]);
        let sunset = (response["sys"]["sunset"]);
        let unixTimestamp = sunrise;
        let milliseconds = unixTimestamp * 1000;
        let dateObject = new Date(milliseconds);
        let humanDateFormat = dateObject.toLocaleString();//10:30:15
        console.log(dateObject.toLocaleString("en-US", {hour: "numeric"})); // 10 AM
        console.log(dateObject.toLocaleString("en-US", {minute: "numeric"})); // 30
        console.log(dateObject.toLocaleString("en-US", {second: "numeric"})); // 15
        let unixTimestamp2 = sunset;
        let milliseconds2 = unixTimestamp2 * 1000;
        let dateObject2 = new Date(milliseconds2);
        let humanDateFormat2 = dateObject2.toLocaleString();
        console.log(dateObject2.toLocaleString("en-US", {hour: "numeric"})); // 10 AM
        console.log(dateObject2.toLocaleString("en-US", {minute: "numeric"})); // 30
        console.log(dateObject2.toLocaleString("en-US", {second: "numeric"})); // 15
        let w1 = new storeweather(name,coordlat,coordlon,temperature,actualtemp,humidity,tempmin,tempmax,weather,description,icon,wind,sunrise,sunset,humanDateFormat,humanDateFormat2)
        console.log(w1);
        let div = document.getElementById("ApiData");
        div.innerHTML = " ";
        // div.innerHTML += [w1.name, w1.coordlat, w1.coordlon, w1.actualtemp, w1.description, w1.humanDateFormat, w1.humanDateFormat2, w1.humidity, w1.icon, w1.sunrise, w1.sunset, w1.temperature, w1.tempmax, w1.tempmin, w1.weather, w1.wind, w1.icon,];

        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=metric&appid=dbe735587bad3551fa97c03750d20f1c", function (data) {
            console.log(data)

           let name = data.name;
            let icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            let temp = /*Math.floor(data.main.temp)*/  temperature + degreeCount;
            let weather = data.weather[0].main;
            let humidity = data.main.humidity + "% Humidity";
            let sunrise = humanDateFormat
            let sunset = humanDateFormat2

            $('.name').html(name);
            $('.icon').attr('src', icon);
            $('.weather').html(weather);
            $('.temp').html(Math.floor(temperature) + degreeCount);
            $('.humidity').html(humidity);
            $('.sunrise').html("Sunrise  " + (dateObject.toLocaleString("en-US", {hour: "numeric"})));
            $('.sunset').html("Sunset  " + (dateObject2.toLocaleString("en-US", {hour: "numeric"})));
        });

    });

}

function search() {
    let location=(document.getElementById("userinput")).value;
    console.log(location);
    displayWeather(location);
}



//allows for the user to change between celsius and fahrenheit
function celsiusToFahrenheit() {

    if(degreeCount == "°C") {
        degreeCount = "°F";
    } else {
        degreeCount = "°C";
    }

    if (celsius == true) {
        temperature = (temperature * 9 / 5 + 32);
        console.log(temperature);
        celsius = false;
        $('.temp').html(Math.floor(temperature) + degreeCount);
    } else {
        temperature = ((temperature -32) * 5/9);
        console.log(temperature);
        celsius = true;
        $('.temp').html(Math.floor(temperature) + degreeCount);
    }
}

function setup() {
    inputButton = createButton('Degree Conversion');
    inputButton.mousePressed(celsiusToFahrenheit);
}

