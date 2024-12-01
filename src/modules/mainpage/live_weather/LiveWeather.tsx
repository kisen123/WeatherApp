import React, { useCallback, useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './LiveWeather.css';
import axios from 'axios';

// Asset import(s)
import { TemperatureIcon, HumidityIcon, WindSpeedIcon, OverallConditionIcon } from '../../../assets/icons/WeatherIcons';


// React component import(s)
import SearchResultsTable from './SearchResultsTable';


// Type import(s)
import { SearchResultsAPI, SearchResultsTableProps, Location } from '../../../types/api-responses/search_api_types';


// Import(s) for local files
import yr_locations from '../../../assets/example_api_responses/yr_locations.json';
import { click } from '@testing-library/user-event/dist/click';



// API data goes here, test values for now
interface WeatherData {
    temperature: string;
    humidity: string;
    windSpeed: string;
    location: string;
    condition: string;
}

const LiveWeather: React.FC = () => {    



    const [locationSearchQuery, setLocationSearchQuery] = useState('');
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [locationSearchResult, setLocationSearchResult] = useState<Location[]>([]); 
    const [userLanguage, setUserLanguage] = useState('nb');
    const [locationID, setLocationID] = useState<string>('');

    const timeout_ref = useRef<NodeJS.Timeout | null>(null);


    // Function to fetch search suggestions from Yr's API
    // NOTE: This does not currently work because of CORS policy.
    const api_url: string = `https://www.yr.no/api/v0/locations/suggest?language=${userLanguage}&q=${locationSearchQuery}`;

    const fetchSearchSuggestions = async (api_url: string): Promise<SearchResultsAPI> => {
        const response = await axios.get<SearchResultsAPI>(api_url);
        
        return response.data; // Type will be inferred
    }



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
        

            
            const loadSearchSuggestions = async () => {

                try {

                    // Fetching the search results from the Yr-API
                    const data: SearchResultsAPI = await fetchSearchSuggestions(api_url);
                    setLocationSearchResult(data._embedded?.location || []);

                    setIsTableVisible(true);

                } catch (err) {
                    console.log(err);
                    console.log("THERE WAS AN ERROR")
                }

            }

            loadSearchSuggestions();


        }
        else if (debouncedQuery === '') {
            setIsTableVisible(false);
        }
    }, [debouncedQuery]);


    const handleRowClick = (clickedLocationID: string) => {
        alert(`Row with ID ${clickedLocationID} clicked`);
        setIsTableVisible(false)
        setLocationID(clickedLocationID);
    }


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

            <div>
                Debounced search query: {debouncedQuery}
            </div>

            <div>
                Selected location: {locationID}
            </div>

            <div className="location-search-container">


                <input type="text"
                placeholder="Search..."
                className="location-search-input"
                onChange={(event) => setLocationSearchQuery(event.target.value)}/>


                {isTableVisible && (
                    <SearchResultsTable results={locationSearchResult} onRowClick={handleRowClick}/>
                    )}


            </div>          


        </div>


        );
    }


export default LiveWeather;