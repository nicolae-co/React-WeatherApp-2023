import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import { useEffect } from "react";
import MainInfo from "./components/MainInfo";

function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [units, setUnits] = useState("metric");

  const api = "89ba394c0aa077efc081f5f66bb6746e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api}&units=${units}`;

  function setCity(event) {
    setInputCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLocation(inputCity);
    setInputCity("");
  }

  function changeUnits() {
    if (units === "metric") {
      setUnits("imperial");
    } else {
      setUnits("metric");
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData({
          temp: Math.round(json.main.temp),
          feelsLike: json.main.feels_like,
          maxTemp: Math.round(json.main.temp_max),
          minTemp: Math.round(json.main.temp_min),
          pressure: json.main.pressure,
          city: json.name,
          weatherMain: json.weather[0].main,
          weatherIcon: json.weather[0].icon,
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [location, units]);

  return (
    <div className="container">
      <SearchBar
        handleSubmit={handleSubmit}
        inputCity={inputCity}
        setCity={setCity}
      />
      {data ? (
          <MainInfo
            city={data.city}
            temp={data.temp}
            weatherMain={data.weatherMain}
            weatherIcon={data.weatherIcon}
            minTemp={data.minTemp}
            maxTemp={data.maxTemp}
          changeUnits={changeUnits}
          units={units}
          />
      ) : (
        <h1>Please search city</h1>
      )}
    </div>
  );
}

export default App;
