import React from "react";
import PropTypes from "prop-types";

const SetUnits = ({ units, handleUnitsChange }) => {
  return (
    <div className="set-units">
      <label>Units:</label>
      <select value={units} onChange={(e) => handleUnitsChange(e.target.value)}>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
      </select>
    </div>
  );
};

SetUnits.propTypes = {
  units: PropTypes.string.isRequired,
  handleUnitsChange: PropTypes.func.isRequired,
};

export default SetUnits;
