import {
  FETCH_WEATHER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  currently: {
    temperature: 0,
    summary: ''
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS: 
      return action.payload.data;
    default:
      return state;
  }
};