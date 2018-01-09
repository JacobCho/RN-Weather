import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import WeeklyForecastListItem from './WeeklyForecastListItem';
import Header from './Header';

class WeeklyForecastList extends Component {
  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ forecast }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    
    this.dataSource = ds.cloneWithRows(forecast);
  }
  
  renderRow(weather) {
    return <WeeklyForecastListItem weather={weather} />;
  }

  render() {
    const { summaryTextStyle, listViewStyle } = styles; 
    return (
      <View>
        <Header>Weekly Forecast</Header>
        <Text style={summaryTextStyle}>{this.props.summary}</Text>
        <ListView 
          style={listViewStyle}
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
      
    );
  };
}

const styles = {
  summaryTextStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    paddingTop: 15
  },
  listViewStyle: {
  }
};

const mapStateToProps = (state) => {
  const { data, summary } = state.weather.daily;
  var forecast = data;
  forecast.shift();

  return { forecast, summary };
};

export default connect(mapStateToProps, null)(WeeklyForecastList);