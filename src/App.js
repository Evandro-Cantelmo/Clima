import "./App.css";
import Card from "./componentes/Card";
import { useState, useEffect } from "react";

function App() {
  const kelvinToCelsius = (kelvin) => kelvin - 273.15;
  const [weather, setWeather] = useState([]);
  async function getWeather() {
    let res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Niteroi&appid=1da18ab91e28724e1792e906e9d3cda8"
    );
    let resJson = await res.json();
    setWeather(resJson);
  }
  var data = new Date();
  console.log(data.toLocaleDateString());
  console.log(weather);
  console.log(Math.floor(kelvinToCelsius(292.97)));
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <div className="container">
      {(typeof weather.main != "undefined") ? (
              <div className="box">
              <Card
                cityName={weather.name}
                data={data.toLocaleDateString()}
                tempe={Math.floor(kelvinToCelsius(weather.main.temp))}
              ></Card>
            </div>
      ) : ('')}
    </div>
  );
}

export default App;
