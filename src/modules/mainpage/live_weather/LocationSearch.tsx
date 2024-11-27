import React, { useState, useEffect } from "react";
import './LocationSearch.css';
//import axios from "axios";

interface Location {
    name: string;
    country: string;
    lat: number;
    lon: number;
    }


type LocationSearchProps = {
    className?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>; // For handling onChange of an input
}

const LocationSearch: React.FC<LocationSearchProps> = ( {className, onChange} ) => {
    


    return (
        <input type="text"
        placeholder="Search..."
        className="location-search-input"
        onChange={onChange}/>
    )
}


export default LocationSearch;