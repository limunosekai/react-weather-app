import React from 'react';
import { useSelector } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';

function weatherList() {
  const weather = useSelector((state) => state.weather);

  const renderWeather = (cityData) => {
    const name = cityData.city.name;
    const temps = _.map(
      cityData.list.map((weather) => weather.main.temp),
      (temp) => temp - 273
    );
    const humidities = cityData.list.map((weather) => weather.main.humidity);
    const pressueres = cityData.list.map((weather) => weather.main.pressure);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color='blue' units='℃' />
        </td>
        <td>
          <Chart data={pressueres} color='green' units='hPa' />
        </td>
        <td>
          <Chart data={humidities} color='red' units='%' />
        </td>
      </tr>
    );
  };

  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature (℃)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
      </thead>
      <tbody>{weather.map(renderWeather)}</tbody>
    </table>
  );
}

export default weatherList;
