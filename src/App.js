import "./App.css";
import Card from "./componentes/Card";
import sunAndRain from "./componentes/image/sunAndRain.png";
import { useState, useEffect } from "react";

function App() {
  let [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  async function getWeather() {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1da18ab91e28724e1792e906e9d3cda8`
    );
    let resJson = await res.json();
    setWeather(resJson);
  }
  const kelvinToCelsius = (kelvin) => kelvin - 273.15;
  const data = new Date();
  console.log(data.toLocaleDateString());
  console.log(weather);
  console.log(Math.floor(kelvinToCelsius(292.97)));
  useEffect(() => {
    getWeather((city = "niteroi"));
  }, []);

  return (
    <div className="container">
      {weather?.main && (
        <div className="box">
          <Card
            button={
              <div>
                <input
                  placeholder="Cidade"
                  onChange={(e) => setCity(e.target.value)}
                ></input>
                <button
                  onClick={() => {
                    console.log(city);
                    getWeather(city);
                  }}
                >
                  Enter
                </button>
              </div>
            }
            cityName={weather.name}
            data={data.toLocaleDateString()}
            image={sunAndRain}
            situation={weather.weather[0].description}
            tempe={Math.floor(kelvinToCelsius(weather.main.temp))}
            humidity={weather.main.humidity}
          ></Card>
        </div>
      )}
    </div>
  );
}

export default App;
