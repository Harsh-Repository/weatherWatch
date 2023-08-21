import React, { Component } from "react";
import debounce from "lodash.debounce";
import LocationSearch from "./components/SearchResults";
import WeatherDisplay from "./components/WeatherReport";
import SetUnits from "./components/SetUnits";
import Input from "./components/Input";

class App extends Component {
  state = {
    loading: false,
    error: null,
    searchResults: [],
    selectedCityId: null,
    weatherData: null,
    units: "Celsius", // Default units
  };

  componentDidMount() {
    this.getWeather();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCityId !== this.state.selectedCityId) {
      this.getWeather();
    }
  }

  // Function to fetch weather data
  getWeather = async () => {
    const { selectedCityId, units } = this.state;
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://api.weatherserver.com/weather/current/${selectedCityId}/${units}`
      );
      const weatherData = await response.json();
      this.setState({ weatherData, loading: false });
    } catch (error) {
      this.setState({ error: "Error fetching weather data.", loading: false });
    }
  };

  // Function to search for locations
  searchLocations = debounce(async (keyword) => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://api.weatherserver.com/weather/cities/${keyword}`
      );
      const locations = await response.json();
      this.setState({ locations, loading: false });
    } catch (error) {
      this.setState({ error: "Error searching locations.", loading: false });
    }
  }, 500); // Adjust the debounce delay as needed

  // Function to handle location selection
  handleLocationSelect = (cityId) => {
    this.setState({ selectedCityId: cityId });
  };

  // Function to handle units change
  handleUnitsChange = (units) => {
    this.setState({ units }, () => this.getWeather());
  };

  render() {
    const { loading, error, searchResults, weatherData, units } = this.state;

    return (
      <div className="App">
        <h1>Weather Watch</h1>
        <LocationSearch
          searchLocations={this.searchLocations}
          handleLocationSelect={this.handleLocationSelect}
          loading={loading}
          error={error}
          searchResults={searchResults} // Pass the search results array here
        />
        <WeatherDisplay
          weatherData={weatherData}
          units={units}
          handleUnitsChange={this.handleUnitsChange}
        />
        {/* Additional components or UI elements can be added here */}
      </div>
    );
  }
}

export default App;
