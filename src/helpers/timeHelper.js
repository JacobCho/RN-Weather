export const getHoursFromUnix = (Unix, includeMins = false) => {
  const date = new Date(0);
  date.setUTCSeconds(Unix);

  var options = {
    hour: 'numeric',
    hour12: true
  };

  if (includeMins) {
    options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }
  }

  return date.toLocaleString('en-US', options);
}

export const getLongDateString = (time) => {
  const date = new Date(0);
  date.setUTCSeconds(time);
  return `${date.toDateString()}, ${getHoursFromUnix(time)}`;
};

export const getDayOfWeek = (Unix) => {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const date = new Date(0);
  date.setUTCSeconds(Unix);

  return days[date.getDay()];
}