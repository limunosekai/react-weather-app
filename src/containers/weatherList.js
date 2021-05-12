import React from 'react';
import { useSelector } from 'react-redux';
import Chart from '../components/chart';

function weatherList() {
  const weather = useSelector((state) => state.weather);

  const renderWeather = (cityData) => {
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp);
    // const humidities = cityData.list.map((weather) => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color='blue' />
        </td>
      </tr>
    );
  };

  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>{weather.map(renderWeather)}</tbody>
    </table>
  );
}

export default weatherList;
