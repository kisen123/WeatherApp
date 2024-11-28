import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './LiveWeather.css';
import LocationSearch from './LocationSearch';
import axios from 'axios';

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



const WeatherWidget: React.FC = () => {


    const [locationSearch, setLocationSearch] = useState('');
    const [locationSearchResult, setLocationSearchResult] = useState({}); 
    const [userLanguage, setUserLanguage] = useState('nb');


    const api_url = `https://www.yr.no/api/v0/locations/suggest?language=${userLanguage}&q=${locationSearch}`;


    // Testing out search results
    const searchResults = (event: Event) => {
       
        console.log("Search results")


        axios.get(api_url)
        .then((response) => {
            setLocationSearchResult(response.data)
            console.log(response.data)
        })
    
    };



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
                    <HumidityIcon className='humidity-icon'/>
                    <p className='data-value' id='humidity-value'>{weatherData.humidity}</p>
                </div>
                <div className='wind-speed'>
                    <WindSpeedIcon className='windSpeed-icon' />
                    <p className='data-value' id='windSpeed-value'>{weatherData.windSpeed}</p>
                </div>
                <div className='temperature'>
                    <TemperatureIcon className='temperature-icon' />
                    <p className='data-value' id='temperature-value'>{weatherData.temperature} </p>
                </div>
                <div className='condition'>
                    <OverallConditionIcon className='condition-icon' />
                    <p className='data-value' id='condition-value'>{weatherData.condition} </p>
                </div>
            </div>

            <div className="location-search-container">
                <h2 className="location-search-result">{weatherData.location}</h2>
                <LocationSearch 
                className='location-search-component'
                onChange={(event) => {
                    setLocationSearch(event.target.value); 
                }}
                />
            </div>

            <div>
                Ok. You want the weather data for location: {locationSearch}
            </div>
            
            


        </div>


        );
    }


export default WeatherWidget;