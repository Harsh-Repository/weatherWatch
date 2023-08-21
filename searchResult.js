import React from "react";
import PropTypes from "prop-types";

const LocationSearch = ({ searchLocations, handleLocationSelect, loading, error, searchResults }) => {
  return (
    <div className="location-search">
      <input
        type="text"
        placeholder="Search for a location..."
        onChange={(e) => searchLocations(e.target.value)}
      />
      {loading && <div className="is-loading">Loading...</div>}
      {error && <div className="error-panel">{error}</div>}
      <ul className="search-results">
        {searchResults.map(result => (
          <li key={result.id}>
            <button onClick={() => handleLocationSelect(result.id)}>
              {result.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

LocationSearch.propTypes = {
  searchLocations: PropTypes.func.isRequired,
  handleLocationSelect: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LocationSearch;
