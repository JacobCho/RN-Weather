import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ListItem extends Component {
  getDayOfWeek() {
    const { time } = this.props.weather;
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const date = new Date(0);
    date.setUTCSeconds(time);

    return days[date.getDay()];
  }

  render() {
    const { summary, temperatureMin, temperatureMax } = this.props.weather;
    const { containerStyle, dayTextStyle, temperatureContainerStyle } = styles;

    return (
      <View style={containerStyle}>
        <Text style={dayTextStyle}>{this.getDayOfWeek()}</Text>
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

export default ListItem;