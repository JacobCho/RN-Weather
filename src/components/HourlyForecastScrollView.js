import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import HourlyForecastListItem from './HourlyForecastListItem';
import Header from './Header';

class HourlyForecastScrollView extends Component {
  renderHourlyForecast() {
    return this.props.data.map(hourly => 
      <HourlyForecastListItem key={hourly.time} hourly={hourly} />
    );
  }

  render() {
    const { containerStyle, scrollViewStyle } = styles;
    return (
      <View style={containerStyle}>
        <Header>Hourly Forecast</Header>
        <ScrollView
          horizontal
          style={scrollViewStyle}
        >
         {this.renderHourlyForecast()}
        </ScrollView>
      </View>
    );
  }
};

const styles = {
  containerStyle: {
    paddingTop: 15, 
    paddingBottom: 15
  },
  scrollViewStyle: {
    paddingTop: 15
  }
}

const mapStateToProps = (state) => {
  const { data } = state.weather.hourly;

  return { data };
};

export default connect(mapStateToProps, null)(HourlyForecastScrollView);