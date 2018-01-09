import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { getIconSource } from '../helpers/iconHelper';
import { getHoursFromUTC } from '../helpers/timeHelper';

class HourlyForecastListItem extends Component {
  render() {
    const { containerStyle, iconStyle, textStyle, tempTextStyle } = styles;
    const { icon, temperature, time } = this.props.hourly;
    const iconSource = getIconSource(icon);
    const roundedTemp = Math.round(temperature);
    const timeString = getHoursFromUTC(time);

    return (
      <View style={containerStyle}>
        <Text style={textStyle}>{timeString}</Text>
        <Image source={iconSource} style={iconStyle} />
        <Text style={[textStyle, tempTextStyle]}>{roundedTemp}°C</Text>
      </View>
    );
  }
};

const styles = {
  containerStyle: {
    height: 80,
    width: 61,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
  textStyle: {
    textAlign: 'center'
  },
  tempTextStyle: {
    paddingBottom: 5
  }
}

export default HourlyForecastListItem;