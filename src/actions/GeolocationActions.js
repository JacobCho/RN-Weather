import { FETCH_LOCATION_SUCCESS } from './types';
import { GOOGLE_MAPS_KEY } from '../../apikey';
import axios from 'axios';

export const fetchLocation = ({ latitude, longitude }) => {
  return (dispatch) => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_KEY}`)
      .then(response => {
        dispatch({type: FETCH_LOCATION_SUCCESS, payload: response });
      });
  };
};