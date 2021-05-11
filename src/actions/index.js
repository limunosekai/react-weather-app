import axios from 'axios';
import * as actions from './type';

const API_KEY = '147ae65bb2a104c347e0c9634023954d';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&lang=kr`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},kr`;

  const request = axios.get(url);

  return {
    type: actions.FETCH_WEATHER,
    payload: request,
  };
}
