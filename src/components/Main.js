import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import CurrentWeather from './CurrentWeather';
import WeeklyForecastList from './WeeklyForecastList';
import HourlyForecastScrollView from './HourlyForecastScrollView';
import CurrentWeatherDetails from './CurrentWeatherDetails';
import { fetchWeather } from '../actions/WeatherActions';
import { fetchLocation } from '../actions/GeolocationActions';

class Main extends Component {
  state = {
    error: '',
    latitude: 0,
    longitude: 0,
    refreshing: false
  }

  componentWillMount() {
    this.watchId = navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      this.setState({ latitude, longitude });
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

  componentWillReceiveProps(newProps) {
    this.setState({ refreshing: newProps.isRefreshing });
  }

  refresh() {
    const { latitude, longitude } = this.state;
    this.props.fetchWeather({ latitude, longitude });
  }

  renderRefreshControl() {
    return <RefreshControl 
              refreshing={this.state.refreshing}
              onRefresh={this.refresh.bind(this)}/>;
  }

  render() {
    return (
      <ScrollView 
        style={{ flex: 1, backgroundColor: 'white' }}
        refreshControl={this.renderRefreshControl()}
        >
        <CurrentWeather />
        <CurrentWeatherDetails />
        <HourlyForecastScrollView />
        <WeeklyForecastList />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { isRefreshing } = state.refreshing;

  return { isRefreshing };
};

export default connect(mapStateToProps, { fetchWeather, fetchLocation })(Main);