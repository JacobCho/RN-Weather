export const getHoursFromUTC = (UTC, includeMins = false) => {
  const date = new Date(0);
  date.setUTCSeconds(UTC);

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

export const getDayOfWeek = (UTC) => {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const date = new Date(0);
  date.setUTCSeconds(UTC);

  return days[date.getDay()];
}