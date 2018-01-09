import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { getIconSource } from '../helpers/iconHelper';
import { getDayOfWeek } from '../helpers/timeHelper';

class WeeklyForecastListItem extends Component {
  render() {
    const { summary, temperatureMin, temperatureMax, icon, time } = this.props.weather;
    const { containerStyle, dayTextStyle, iconStyle, temperatureContainerStyle } = styles;
    const iconSource = getIconSource(icon);
    
    return (
      <View style={containerStyle}>
        <Text style={dayTextStyle}>{getDayOfWeek(time)}</Text>
        <Image source={iconSource} style={iconStyle}/>
        <View style={temperatureContainerStyle}>
          <Text>{Math.round(temperatureMin)}°C</Text>
          <Text>{Math.round(temperatureMax)}°C</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
  dayTextStyle: {
    paddingLeft: 15,
    width: 100,
  },
  temperatureContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 15,
    width: 100,
  },
};

export default WeeklyForecastListItem;