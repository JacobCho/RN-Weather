import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { getIconSource } from '../helpers/iconHelper';

class HourlyForecastListItem extends Component {
  getHour() {
    const { time } = this.props.hourly;
    const date = new Date(0);
    date.setUTCSeconds(time);
    return date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
  }

  render() {
    const { containerStyle, iconStyle, textStyle, tempTextStyle } = styles;
    const { icon, temperature } = this.props.hourly;
    const iconSource = getIconSource(icon);
    const roundedTemp = Math.round(temperature);
    const time = this.getHour();

    return (
      <View style={containerStyle}>
        <Text style={textStyle}>{time}</Text>
        <Image source={iconSource} style={iconStyle} />
        <Text style={[textStyle, tempTextStyle]}>{roundedTemp} °C</Text>
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