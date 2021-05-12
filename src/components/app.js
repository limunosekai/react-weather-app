import React from 'react';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weatherList';

const App = () => {
  return (
    <div>
      <SearchBar />
      <WeatherList />
    </div>
  );
};

export default App;
