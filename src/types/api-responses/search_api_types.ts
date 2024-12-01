export interface SearchResultsAPI {
    totalResults: number;
    _links:       SearchResultsLinks;
    _embedded:    Embedded;
}

export interface Embedded {
    location?: Location[];
}

export interface Location {
    category:      Category;
    id:            string;
    name:          string;
    position:      CoastalPoint;
    elevation:     number;
    timeZone:      string;
    urlPath:       string;
    country:       Category;
    region:        Category;
    subregion:     Category;
    isInOcean:     boolean;
    _links:        LocationLinks;
    coastalPoint?: CoastalPoint;
}

export interface LocationLinks {
    self:                 Page;
    celestialevents:      Page;
    forecast:             Page;
    cameras:              Page;
    currenthour:          Page;
    mapfeature:           Page;
    now?:                 Page;
    subseasonalforecast?: Page;
    auroraforecast?:      Page;
    notifications?:       Page;
    extremeforecasts?:    Page;
    warnings?:            Page;
    extremewarnings?:     Page;
    watertemperatures?:   Page;
    airqualityforecast?:  Page;
    observations:         Page[];
    coast?:               Page;
    tide?:                Page;
}

export interface Page {
    href: string;
}

export interface Category {
    id:   string;
    name: string;
}

export interface CoastalPoint {
    lat: number;
    lon: number;
}

export interface SearchResultsLinks {
    self:     Page;
    page:     Page;
    search:   Page;
    location: Page[];
}


export interface SearchResultsTableProps {
    className?: string;
    results: Location[];
    onRowClick?: (id: string) => void; // Optional callback for row click
}