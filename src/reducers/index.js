import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';
import GeolocationReducer from './GeolocationReducer';
import RefreshingReducer from './RefreshingReducer';

export default combineReducers({
  weather: WeatherReducer,
  geolocation: GeolocationReducer,
  refreshing: RefreshingReducer
});