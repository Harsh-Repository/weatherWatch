import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ searchLocations }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    searchLocations(value);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Search for a location..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

Input.propTypes = {
  searchLocations: PropTypes.func.isRequired,
};

export default Input;
