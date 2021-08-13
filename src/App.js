import "./App.css";
import Card from "./componentes/Card";
import { useState, useEffect } from "react";

function App() {
  const [weather, setWeather] = useState([]);
  async function getWeather() {
    let res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Niteroi&appid=1da18ab91e28724e1792e906e9d3cda8"
    );
    let resJson = await res.json();
    setWeather(resJson)
  }
  console.log(weather);
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <div className='container'>
      <div className='box'>
        <Card cityName={weather.name}></Card>
      </div>
    </div>
  );
}

export default App;
