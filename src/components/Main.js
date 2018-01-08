import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import CurrentWeather from './CurrentWeather';
import WeeklyForecastList from './WeeklyForecastList';
import HourlyForecastScrollView from './HourlyForecastScrollView';
import { fetchWeather } from '../actions/WeatherActions';
import { fetchLocation } from '../actions/GeolocationActions';

class Main extends Component {
  state = {
    error: ''
  }

  componentWillMount() {
    this.watchId = navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      this.props.fetchWeather({ latitude, longitude });
      this.props.fetchLocation({ latitude, longitude });
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
      <ScrollView style={{ flex: 1 }}>
        <CurrentWeather />
        <HourlyForecastScrollView />
        <WeeklyForecastList />
      </ScrollView>
    );
  }
}

export default connect(null, { fetchWeather, fetchLocation })(Main);