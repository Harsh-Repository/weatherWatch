import React from "react";
import PropTypes from "prop-types";
import SetUnits from "./SetUnits";

const WeatherDisplay = ({ weatherData, units, handleUnitsChange }) => {
  return (
    <div className="weather-display">
        <SetUnits units={units} handleUnitsChange={handleUnitsChange} />
      {weatherData && (
        <>
          <h2>{weatherData.location}</h2>
          <div className="weather-info">
            <p>Conditions: {weatherData.conditions}</p>
            <p>CURRENT TEMPERATURE: {weatherData.temp}°{units}</p>
            <p>MAXIMUM TEMPERATURE: {weatherData.temp_max}°{units}</p>
            <p>MINIMUM TEMPERATURE: {weatherData.temp_min}°{units}</p>
            {/* <p>Feels Like: {weatherData.feels_like}°{units}</p> */}
            <p>WIND SPEED: {weatherData.wind_speed} km/h</p>
            <p>WIND DIRECTION: {weatherData.wind_direction}°</p>
            <p>PRESSURE: {weatherData.pressure} hPa</p>
            <p>HUMIDITY: {weatherData.humidity}%</p>
          </div>
        </>
      )}
      
    </div>
  );
};

WeatherDisplay.propTypes = {
  weatherData: PropTypes.shape({
    location: PropTypes.string,
    conditions: PropTypes.string,
    temp: PropTypes.number,
    temp_max: PropTypes.number,
    temp_min: PropTypes.number,
    feels_like: PropTypes.number,
    wind_speed: PropTypes.number,
    wind_direction: PropTypes.number,
    pressure: PropTypes.number,
    humidity: PropTypes.number,
    // Add other weather data properties as needed
  }),
  units: PropTypes.string.isRequired,
  handleUnitsChange: PropTypes.func.isRequired,
};

export default WeatherDisplay;
