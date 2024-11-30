import React from "react";

// Import(s) for types
import { Location, SearchResultsTableProps } from "../../../types/api-responses/search_api_types";

// Import(s) for styles
import styles from './SearchResultsTable.module.css';


const SearchResultsTable: React.FC<SearchResultsTableProps> = ({ className, results, onRowClick }) => {
    
    
    return (

        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.headerRow}>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                {results.map((result) => (
                    <tr key={result.id} className={styles.tableRow} onClick={() => onRowClick && onRowClick(result.id)}>
                        <td className={styles.cell}>
                            <span>{result.name}</span>
                            <span>{result.category.name}, {result.subregion.name} ({result.region.name}), {result.elevation} moh</span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
}




export default SearchResultsTable;