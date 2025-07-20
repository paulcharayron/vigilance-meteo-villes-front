import Spinner from "./Spinner";

import type { ICommune } from "../models/ICommune";

const SearchCommune = ({
    searchTerm, setSearchTerm,
    isLoadingResults, errorMessageResults, resultsList, handleResultSelection
}) => {
    return (
        <div className="relative mt-8 w-1/2 flex flex-col items-center">
              
            <div className="absolute w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <div className="h-3/5">
                        <img src="search.svg" alt="search" className="h-full object-contain"/>
                    </div>
                </div>
                <input 
                    id="search-commune"
                    type="text"
                    placeholder="Cherchez une commune..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full ps-12 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Résultats de recherche */}
            {searchTerm?.length != 0 && (
                <div className="
                    absolute w-full mt-11 rounded-lg border border-gray-300 bg-white
                    min-h-[2.5rem] max-h-[20vh] overflow-y-auto shadow
                    text-sm z-20">
                    {isLoadingResults ? (
                        <div className="p-2 text-gray-500"><Spinner /></div>
                    ) : errorMessageResults ? (
                        <p className="text-red-500 p-2">{errorMessageResults}</p>
                    ) : resultsList?.length === 0 ? (
                        <p className="text-gray-500 p-2">Aucun résultat</p>
                    ) : (
                        <ul>
                        {resultsList.map((commune: ICommune) => (
                            <li key={`${commune.code}-${commune.siren || 'nosiren'}`}>
                            <div
                                onClick={() => handleResultSelection(commune.nom, commune.codeDepartement)}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                            >
                                {commune.nom} ({commune.codeDepartement})
                            </div>
                            </li>
                        ))}
                        </ul>
                    )}
                </div>
            )}
            
        </div>
    )
}

export default SearchCommune
