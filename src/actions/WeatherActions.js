import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS } from './types';
import { DARKSKY_API_KEY } from '../../apikey';
import axios from 'axios';

export const fetchWeather = ({ latitude, longitude }) => {
  return (dispatch) => {
    axios.get(`https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${latitude},${longitude}?units=ca`)
      .then(response => {
        dispatch({type: FETCH_WEATHER_SUCCESS, payload: response });
      });
  };
};