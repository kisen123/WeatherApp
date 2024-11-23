import React from 'react';
import { useState } from 'react';
import './LiveWeather.css';

function LiveWeather() {

    const [geoLocation, setGeoLocation] = useState('');
    const [testInput, setTestInput] = useState('Some random input');

    return (
        <div className='weather-div'>
            <input 
                className="weather-inputs"
                name="weather-location"
                type="text"
                onChange={event => setGeoLocation(event.target.value)}
            />
            <input 
                className="weather-inputs"
                name="test-input"
                type="text" 
            />
            <p>The location is: {geoLocation}</p>
        </div>
            
    );
}

export default LiveWeather;