import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import CurrentWeather from './CurrentWeather';
import { fetchWeather } from '../actions/WeatherActions';

class Main extends Component {
  state = {
    latitude: '',
    longitude: '',
    error: ''
  }

  componentWillMount() {
    this.watchId = navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      this.props.fetchWeather({ latitude, longitude });
    },
      (error) => this.setState({ error: error.message || '' }),
      { enableHighAccuracy: true, timeout: 20000, maximumage: 1000 }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
      <CurrentWeather />
    );
  }
}

export default connect(null, { fetchWeather })(Main);