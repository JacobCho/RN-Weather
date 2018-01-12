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
  },
  alerts: []
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

function addFakeAlert() {
  return {
    description: "...FLOOD WATCH REMAINS IN EFFECT THROUGH LATE MONDAY NIGHT...\nTHE FLOOD WATCH CONTINUES FOR\n* A PORTION OF NORTHWEST WASHINGTON...INCLUDING THE FOLLOWING\nCOUNTY...MASON.\n* THROUGH LATE FRIDAY NIGHT\n* A STRONG WARM FRONT WILL BRING HEAVY RAIN TO THE OLYMPICS\nTONIGHT THROUGH THURSDAY NIGHT. THE HEAVY RAIN WILL PUSH THE\nSKOKOMISH RIVER ABOVE FLOOD STAGE TODAY...AND MAJOR FLOODING IS\nPOSSIBLE.\n* A FLOOD WARNING IS IN EFFECT FOR THE SKOKOMISH RIVER. THE FLOOD\nWATCH REMAINS IN EFFECT FOR MASON COUNTY FOR THE POSSIBILITY OF\nAREAL FLOODING ASSOCIATED WITH A MAJOR FLOOD.\n",
    expires: 1542326400,
    regions: ["Richmond", "Burnaby"],
    severity: "warning",
    time: 1515784982,
    title: "Fake alert",
    uri: "https://www.google.com"
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS: 
      const { currently, daily, hourly, alerts } = action.payload.data;
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
      const alertsArray = alerts || [];
      
      return { 
        currently: {
          temperature: roundedTemp,
          summary,
          icon,
          time
        },
        hourly: hourly,
        daily: daily,
        details: {
          data: detailsData
        },
        alerts: alertsArray
      };
    default:
      return state;
  }
};