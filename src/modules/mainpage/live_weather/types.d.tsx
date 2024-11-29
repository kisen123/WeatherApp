export interface SearchResult {
    id: number; // Unique identifier
    name: string;
    description: string;
    createdAt: string; // Date or string
  }
  
  export interface SearchResultsTableProps {
    className?: string;
    results: SearchResult[];
    onRowClick?: (id: number) => void; // Optional callback for row click
  }