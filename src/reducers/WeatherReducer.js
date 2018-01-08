import {
  FETCH_WEATHER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  currently: {
    temperature: 0,
    summary: '',
    icon: ''
  },
  hourly: {
    data: []
  },
  daily: {
    summary: '',
    data: []
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS: 
      const { temperature, summary, icon } = action.payload.data.currently;
      const roundedTemp = Math.round(temperature);
      
      return { currently: {
        temperature: roundedTemp,
        summary,
        icon
        },
        hourly: action.payload.data.hourly,
        daily: action.payload.data.daily
      };
    default:
      return state;
  }
};