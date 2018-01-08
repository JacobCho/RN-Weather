import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { getIconSource } from '../helpers/iconHelper';

class ListItem extends Component {
  getDayOfWeek() {
    const { time } = this.props.weather;
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const date = new Date(0);
    date.setUTCSeconds(time);

    return days[date.getDay()];
  }

  render() {
    const { summary, temperatureMin, temperatureMax, icon } = this.props.weather;
    const { containerStyle, dayTextStyle, iconStyle, temperatureContainerStyle } = styles;
    const iconSource = getIconSource(icon);
    
    return (
      <View style={containerStyle}>
        <Text style={dayTextStyle}>{this.getDayOfWeek()}</Text>
        <Image source={iconSource} style={iconStyle}/>
        <View style={temperatureContainerStyle}>
          <Text>{Math.round(temperatureMin)} °C</Text>
          <Text>{Math.round(temperatureMax)} °C</Text>
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

export default ListItem;