import { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            date: "Sunday 13:00",
            temperature: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            city: response.data.name,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
        })

    
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                    <input type="search" placeholder="Enter a city" className="form-control" />
                    </div>
                    <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <img 
                        src={weatherData.iconUrl}
                        alt={weatherData.description} />
                        <span className="temperature">{Math.round(weatherData.temperature)}</span>
                        <span className="unit">°C</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Feels like: {Math.round(weatherData.feelsLike)}°C</li>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
    let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
    }
}