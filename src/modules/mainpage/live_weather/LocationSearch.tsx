import React, { useState, useEffect } from "react";
//import axios from "axios";

interface Location {
    name: string;
    country: string;
    lat: number;
    lon: number;
    }


type LocationSearchProps = {
    className?: string
}

const LocationSearch: React.FC<LocationSearchProps> = () => {
    


    return (
        <div>Search bar goes here</div>
    )
}


export default LocationSearch;