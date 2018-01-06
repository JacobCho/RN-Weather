export const getIconSource = (icon) => {
  switch (icon) {
    case 'clear-day':
      return require('../../icons/sunny.png');
    case 'clear-night':
      return require('../../icons/clear-night.png');
    case 'rain':
      return require('../../icons/rain.png');
    case 'snow':
      return require('../../icons/snow.png');
    case 'sleet':
      return require('../../icons/sleet.png');
    case 'wind':
      return require('../../icons/windy.png');
    case 'fog':
      return require('../../icons/fog.png');
    case 'cloudy':
      return require('../../icons/cloudy.png');
    case 'partly-cloudy-day':
      return require('../../icons/partly-cloudy-day.png');
    case 'partly-cloudy-night':
      return require('../../icons/partly-cloudy-night.png');
    default:
      return require('../../icons/rain.png');
  }
};