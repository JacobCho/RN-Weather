import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';
import GeolocationReducer from './GeolocationReducer';

export default combineReducers({
  weather: WeatherReducer,
  geolocation: GeolocationReducer
});