import { table } from "console";
import React from "react";
import { SearchResult, SearchResultsTableProps } from "./types.d";
import './SearchResultsTable.css';

const SearchResultsTable: React.FC<SearchResultsTableProps> = ({ className, results, onRowClick }) => {
    return (

        <div className={className}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Created at</th>
                    </tr>
                </thead>
                <tbody>
                {results.map((result) => (
                    <tr key={result.id} onClick={() => onRowClick && onRowClick(result.id)}>
                        <td>{result.id}</td>
                        <td>{result.name}</td>
                        <td>{result.description}</td>
                        <td>{new Date(result.createdAt).toLocaleDateString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
}




export default SearchResultsTable;