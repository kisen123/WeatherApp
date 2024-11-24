import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './LiveWeather.css';
import LocationSearch from './LocationSearch';


// API data goes here, test values for now
interface WeatherData {
    temperature: string;
    humidity: string;
    windSpeed: string;
    location: string;
    condition: string;
}


//const [geoLocation, setGeoLocation] = useState('');
//const [testInput, setTestInput] = useState('Some random input');

const WeatherWidget: React.FC = () => {

    // Test values weather data
    const weatherData: WeatherData = {
        temperature: "-1°C",
        humidity: "40%",
        windSpeed: "3 m/s",
        location: "Trondheim, Heimdal",
        condition: "Overskyet",
    }



    return (
        <div className="weather-widget">
            <div className="header">
                <h1>Weather Widget</h1>
            </div>
            <div className="details">
                <div>
                <strong>Temperature:</strong> {weatherData.temperature}
                </div>
                <div>
                <strong>Humidity:</strong> {weatherData.humidity}
                </div>
                <div>
                <strong>Wind Speed:</strong> {weatherData.windSpeed}
                </div>
                <div>
                <strong>Condition:</strong> {weatherData.condition}
                </div>
                
                <h2 className="location-search-result">{weatherData.location}</h2>
                <LocationSearch />
            </div>


        </div>


        );
    }


export default WeatherWidget;