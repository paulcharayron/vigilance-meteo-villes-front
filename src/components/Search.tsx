import Spinner from "./Spinner";

import type { ICommune } from "../models/ICommune";

const SearchCommune = ({
    searchTerm, setSearchTerm,
    isLoadingResults, errorMessageResults, resultsList, handleResultSelection
}) => {
    return (
        <div className="search">
            <div className="search-input-wrapper">
                <img src="search.svg" alt="search" />

                <input 
                    id="search-commune"
                    type="text"
                    placeholder="Cherchez une commune..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="search-results-wrapper">
                {isLoadingResults ? (
                    <Spinner />
                ) : errorMessageResults ? (
                    <p className='text-red-500'>{errorMessageResults}</p>
                ) : (
                    <ul>
                    {resultsList?.map((commune: ICommune) => (
                        <li key={`${commune.code}-${commune.siren || 'nosiren'}`}>
                        <div onClick={() => handleResultSelection(commune.nom)}>{commune.nom}</div>
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default SearchCommune
