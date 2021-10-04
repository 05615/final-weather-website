class storeweather{
    constructor(name,coordlat,coordlon,temperature,actualtemp,humidity,tempmin,tempmax,weather,descrtiption,icon,wind){
        this.name = name;
        this.coordlat = coordlat;
        this.coordlon = coordlon;
        this.temperature = temperature;
        this.actualtemp = actualtemp;
        this.humidity = humidity;
        this.tempmin = tempmin;
        this.tempmax = tempmax;
        this.weather = weather;
        this.description = descrtiption;
        this.icon = icon;
        this.wind = wind;
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
            let temperature = (response["main"]["feels_like"]+ "°C");
            let actualtemp = (response["main"]["temp"]+ "°C");
            let humidity = (response["main"]["humidity"]+ "%");
            let tempmin = (response["main"]["temp_min"]+ "°C");
            let tempmax = (response["main"]["temp_max"]+ "°C");
            let weather = (response["weather"]["0"]["main"]);
            let description = (response["weather"]["0"]["description"]);
            let icon = (response["weather"]["0"]["icon"]);
            let wind = (response["wind"]["speed"]);
            let w1 = new storeweather(name,coordlat,coordlon,temperature,actualtemp,humidity,tempmin,tempmax,weather,description,icon,wind)
            console.log(w1);
        });

        }

    function search() {
        let location=(document.getElementById("userinput")).value;
        console.log(location);
        displayWeather(location);


    }
