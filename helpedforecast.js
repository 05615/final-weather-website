    function getWeather (city) {
        var url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=dbe735587bad3551fa97c03750d20f1c";


        fetch(url, {}).then(response => {
            return response.json();                 //now return that promise to JSON
        }).then(response => {

            console.log(response);

        });


        function displayWeather(data) {
            const city = data["name"];
            // const {icon, description} = data[0];
            const icon = data["weather"]["icon"];
            console.log(icon);
            const speed = data["wind"]["speed"];
            document.getElementById("city").innerText = "Weather in " + name;
            document.getElementById("icon").src =
                "https://openweathermap.org/img/wn/" + icon + ".png";
            document.getElementById("description").innerText = description;
            document.getElementById("temp").innerText = temp + "°C";
            document.getElementById("humidity").innerText =
                "Humidity: " + humidity + "%";
            document.getElementById("wind").innerText =
                "Wind speed: " + speed + " km/h";
            document.getElementById("weather").classList.remove("loading");
            document.body.style.backgroundImage =
                "url('https://source.unsplash.com/1600x900/?" + name + "')";
        }

        function search() {
            this.getWeather(document.querySelector(".search-bar")).value;
        }

        //search bar
        document.getElementById("userinput").addEventListener("enter", function () {
            getWeather(document.getElementById("userinput").value);
        });

        document
            .querySelector(".search-bar")
            .addEventListener("keyup", function (event) {
                if (event.key === "Enter") {
                    getWeather(document.getElementById("userinput")).value;
                }
            });


    }
