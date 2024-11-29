import React, { useCallback, useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './LiveWeather.css';
import axios from 'axios';

// Asset import(s)
import { TemperatureIcon, HumidityIcon, WindSpeedIcon, OverallConditionIcon } from '../../../assets/icons/WeatherIcons';


// React component import(s)
import SearchResultsTable from './SearchResultsTable';


// Type import(s)
import { SearchResult, SearchResultsTableProps } from './types.d';



// API data goes here, test values for now
interface WeatherData {
    temperature: string;
    humidity: string;
    windSpeed: string;
    location: string;
    condition: string;
}

const mockSearchData = [
    { id: 1, name: 'Alice', description: 'Software Engineer', createdAt: '2023-01-01' },
    { id: 2, name: 'Bob', description: 'Product Manager', createdAt: '2023-01-02' },
    { id: 3, name: 'Charlie', description: 'Designer', createdAt: '2023-01-03' },
]



const WeatherWidget: React.FC = () => {


    const [locationSearchQuery, setLocationSearchQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [locationSearchResult, setLocationSearchResult] = useState({}); 
    const [userLanguage, setUserLanguage] = useState('nb');
    const [filteredResults, setFilteredResults] = useState(mockSearchData);

    const timeout_ref = useRef<NodeJS.Timeout | null>(null);


    const api_url = `https://www.yr.no/api/v0/locations/suggest?language=${userLanguage}&q=${locationSearchQuery}`;



    // Debouncing logic
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(locationSearchQuery);
        }, 500); //500ms debounce timer
    
        // Cleanup timeout if locationSearchQuery before 500ms
        return () => {
            clearTimeout(handler);
        };
    
    }, [locationSearchQuery]);


    useEffect(() => {
        // Triggered only when debouncedQuery changes
        if (debouncedQuery) {
            console.log(`Debounced query: ${debouncedQuery}`);
        /*
        axios.get(api_url)
        .then((response) => {
            setLocationSearchResult(response.data)
            console.log(response.data)
        })
        */

        }
    }, [debouncedQuery]);




    /*
    const handleSearchChange = useCallback((value: string) => {
        
        if (timeout_ref.current) {
            clearTimeout(timeout_ref.current);
        }

        timeout_ref.current = setTimeout(() => {
            console.log("Search query: ", value);
            setLocationSearchQuery(value); // Updates locationSearchQuery
        }, 500); // 500ms debounce timer
    }, []);
    */





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


                <input type="text"
                placeholder="Search..."
                className="location-search-input"
                onChange={(event) => setLocationSearchQuery(event.target.value)}/>

                




            </div>          

            <div>
                <SearchResultsTable className='search-results-table' results={mockSearchData}/>
            </div>
            
            <div>
                Ok. You want the weather data for location: {debouncedQuery}
            </div>



        </div>


        );
    }


export default WeatherWidget;