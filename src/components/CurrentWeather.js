import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class CurrentWeather extends Component {
  render() {
    const { 
      containerStyle, 
      locationContainerStyle,
      locationTextStyle, 
      degreesContainerStyle,
      degreesTextStyle, 
      weatherContainerStyle,
      weatherTextStyle 
    } = styles;

    return (
      <View>
        <View style={[containerStyle, locationContainerStyle]}>
          <Text style={locationTextStyle}>
            Vancouver
          </Text>
        </View>
        <View style={[containerStyle, degreesContainerStyle]}>
          <Text style={degreesTextStyle}>
            {this.props.temperature} °C
          </Text>
        </View>
        <View style={[containerStyle, weatherContainerStyle]}>
          <Text style={weatherTextStyle}>
            {this.props.summary}
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
    flex: 1,
    textAlign: 'center'
  }
};

const mapStateToProps = (state) => {
  const { temperature, summary } = state.weather;

  return { temperature, summary };
};

export default connect(mapStateToProps, null)(CurrentWeather);