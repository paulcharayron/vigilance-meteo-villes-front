import React from "react";

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="search" />

                <input 
                    id="search-commune"
                    type="text"
                    placeholder="Cherchez une ville..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search
