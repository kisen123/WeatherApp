import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './LiveWeather.css';
import LocationSearch from './LocationSearch';

// Asset import(s)
import { TemperatureIcon, HumidityIcon, WindSpeedIcon, OverallConditionIcon } from '../../../assets/icons/WeatherIcons';



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
                <h1>Weather Data</h1>
            </div>
            <div className="weather-data-details">
                <div className='humidity'>
                    <HumidityIcon />
                    <p>{weatherData.humidity}</p>
                </div>
                <div className='wind-speed'>
                    <WindSpeedIcon />
                    <p>{weatherData.windSpeed}</p>
                </div>
                <div className='temperature'>
                    <TemperatureIcon />
                    <p>{weatherData.temperature} </p>
                </div>
                <div className='condition'>
                    <OverallConditionIcon />
                    <p>{weatherData.condition} </p>
                </div>
            </div>

            <h2 className="location-search-result">{weatherData.location}</h2>
            <LocationSearch />


        </div>


        );
    }


export default WeatherWidget;