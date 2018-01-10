import {
  FETCH_WEATHER_SUCCESS
} from '../actions/types';
import { getHoursFromUnix } from '../helpers/timeHelper';

const INITIAL_STATE = {
  currently: {
    temperature: 0,
    summary: '',
    icon: '',
    time: 0
  },
  hourly: {
    data: []
  },
  daily: {
    summary: '',
    data: []
  },
  details: {
    data: []
    /*
      data objects must follow this example structure:
      {
        key: 'wind',
        data: [
          {
            description: 'Wind Speed',
            value: '10 km/h W'
          },
          {
            description: 'Wind Gust',
            value: '20 km/h'
          }
        ]
      }
    */
  }
};

function bearingToDirection(bearing) {
  const val = Math.floor((bearing / 22.5) + 0.5);
  const array = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return array[(val % 16)];
}

function getWindDetails(windSpeed, windGust, windBearing) {
  const windDirection = bearingToDirection(windBearing);
  const windSpeedString = `${Math.round(windSpeed)} km/h ${windDirection}`;
  return {
    key: 'wind',
    data: [
      {
        description: 'Wind Speed',
        value: windSpeedString
      },
      {
        description: 'Wind Gust',
        value: `${Math.round(windGust)} km/h`
      }
    ]
  };
}

function getSunDetails(sunriseTime, sunsetTime) {
  const sunrise = getHoursFromUnix(sunriseTime, true);
  const sunset = getHoursFromUnix(sunsetTime, true);
  return {
    key: 'sun',
    data: [
      {
        description: 'Sunrise',
        value: sunrise
      }, 
      {
        description: 'Sunset',
        value: sunset
      }
    ]
  };
}

function getOtherDetails(visibility, precipProbability) {
  const visibilityString = `${Math.round(visibility)} km`;
  const rainChance = `${Math.round(precipProbability * 100).toString()}%`;
  return {
    key: 'other',
    data: [
      {
        description: 'Visibility',
        value: visibilityString
      },
      {
        description: 'Chance of rain',
        value: rainChance
      }
    ]
  };
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS: 
      const { currently, daily, hourly } = action.payload.data;
      const { temperature, 
              summary, 
              icon, 
              time,
              windSpeed, 
              windGust, 
              windBearing, 
              visibility, 
              precipProbability 
            } = currently;
      const roundedTemp = Math.round(temperature);
      const { sunriseTime, sunsetTime } = daily.data[0];
      
      var detailsData = [];
      detailsData.push(getWindDetails(windSpeed, windGust, windBearing));
      detailsData.push(getSunDetails(sunriseTime, sunsetTime));
      detailsData.push(getOtherDetails(visibility, precipProbability));
      
      return { currently: {
        temperature: roundedTemp,
        summary,
        icon,
        time
        },
        hourly: hourly,
        daily: daily,
        details: {
          data: detailsData
        }
      };
    default:
      return state;
  }
};