import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import HourlyForecastListItem from './HourlyForecastListItem';

class HourlyForecastScrollView extends Component {
  renderHourlyForecast() {
    return this.props.data.map(hourly => 
      <HourlyForecastListItem key={hourly.time} hourly={hourly} />
    );
  }

  render() {
    return (
      <View>
        <Text style={styles.headerStyle}>Hourly Forecast</Text>
        <ScrollView
          horizontal
        >
         {this.renderHourlyForecast()}
        </ScrollView>
      </View>
    );
  }
};

const styles = {
  headerStyle: {
    paddingLeft: 15,
    paddingRight: 15, 
    paddingBottom: 15,
    paddingTop: 20,
    fontWeight: 'bold'
  },
}

const mapStateToProps = (state) => {
  const { data } = state.weather.hourly;
  var hourly = data.splice(0, 12);

  return { data: hourly };
};

export default connect(mapStateToProps, null)(HourlyForecastScrollView);