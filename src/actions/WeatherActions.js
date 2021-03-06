import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, REFRESH_STARTED, REFRESH_FINISHED } from './types';
import { DARKSKY_API_KEY } from '../../apikey';
import axios from 'axios';

export const fetchWeather = ({ latitude, longitude }) => {
  return (dispatch) => {
    dispatch({ type: REFRESH_STARTED });
    axios.get(`https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${latitude},${longitude}?units=ca`)
      .then(response => {
        dispatch({ type: FETCH_WEATHER_SUCCESS, payload: response });
        dispatch({ type: REFRESH_FINISHED });
      });
  };
};