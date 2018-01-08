import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { getIconSource } from '../helpers/iconHelper';

class CurrentWeather extends Component {
  render() {
    const { 
      containerStyle, 
      locationContainerStyle,
      locationTextStyle, 
      degreesContainerStyle,
      degreesTextStyle, 
      weatherContainerStyle,
      weatherTextStyle,
      iconStyle
    } = styles;

    const { address, temperature, summary, icon } = this.props;
    const iconSource = getIconSource(icon);
    
    return (
      <View>
        <View style={[containerStyle, locationContainerStyle]}>
          <Text style={locationTextStyle}>
            {address}
          </Text>
        </View>
        <View style={[containerStyle, degreesContainerStyle]}>
          <Text style={degreesTextStyle}>
            {temperature} °C
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
    paddingTop: 30
  },
  locationTextStyle: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center'
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
  const { temperature, summary, icon } = state.weather.currently;
  const { address } = state.geolocation;
  
  return { temperature, summary, icon, address,  };
};

export default connect(mapStateToProps, null)(CurrentWeather);