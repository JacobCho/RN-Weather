import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { getIconSource } from '../helpers/iconHelper';
import { getHoursFromUnix } from '../helpers/timeHelper';

class CurrentWeather extends Component {
  render() {
    const { 
      containerStyle, 
      locationContainerStyle,
      locationTextStyle, 
      lastUpdatedTextStyle,
      degreesContainerStyle,
      degreesTextStyle, 
      weatherContainerStyle,
      weatherTextStyle,
      iconStyle
    } = styles;

    const { address, temperature, summary, icon, time } = this.props;
    const iconSource = getIconSource(icon);
    
    return (
      <View>
        <View style={[containerStyle, locationContainerStyle]}>
          <Text style={locationTextStyle}>
            {address}
          </Text>
          <Text style={lastUpdatedTextStyle}>
            {`Last Updated: ${getHoursFromUnix(time, true)}`}
          </Text>
        </View>
        <View style={[containerStyle, degreesContainerStyle]}>
          <Text style={degreesTextStyle}>
            {temperature}°C
          </Text>
        </View>
        <View style={[containerStyle, weatherContainerStyle]}>
          <Image source={iconSource} style={iconStyle} />
          <Text style={weatherTextStyle}>
            {summary}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  locationContainerStyle: {
    paddingTop: 40,
    flexDirection: 'column'
  },
  locationTextStyle: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center'
  },
  lastUpdatedTextStyle: {
    fontSize: 8,
    textAlign: 'center',
    flex: 1,
  },
  degreesContainerStyle: {
    paddingTop: 50
  },
  degreesTextStyle: {
    fontSize: 40,
    flex: 1,
    textAlign: 'center'
  },
  weatherContainerStyle: {
    paddingTop: 20
  },
  weatherTextStyle: {
    fontSize: 18,
    textAlign: 'center',
    paddingLeft: 10
  },
  iconStyle: {
    width: 30,
    height: 30,
    justifyContent: 'flex-end',
  }
};

const mapStateToProps = (state) => {
  const { temperature, summary, icon, time } = state.weather.currently;
  const { address } = state.geolocation;
  
  return { temperature, summary, icon, time, address };
};

export default connect(mapStateToProps, null)(CurrentWeather);