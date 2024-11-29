export interface SearchResult {
    id: string; // Unique identifier
    name: string;
    elevation: number;

    category: {
      id: string,
      name: string,
    };

    subregion: {
      id: string,
      name: string,
    };

    region: {
      id: string,
      name: string,
    };
  }
  
  export interface SearchResultsTableProps {
    className?: string;
    //results: any;
    results: SearchResult[];
    onRowClick?: (id: string) => void; // Optional callback for row click
  }