import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Main extends Component {
  state = {
    latitude: '',
    longitude: '',
    error: ''
  }

  componentWillMount() {
    this.watchId = navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude });
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
      <View style={{ paddingTop: 65 }}>
        <Text>Latitude: {this.state.latitude}, Longitude: {this.state.longitude}</Text>
      </View>
    );
  }
}

export default connect()(Main);