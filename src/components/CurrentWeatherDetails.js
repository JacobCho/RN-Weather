import React, { Component } from 'react';
import { View, Text, LayoutAnimation, ListView } from 'react-native';
import { connect } from 'react-redux';
import Header from './Header';
import DetailsListItem from './DetailsListItem';

class CurrentWeatherDetails extends Component {
  state = { expanded: false }

  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Header onPress={this.onHeaderPress.bind(this)}>Current Weather Details</Header>
        {this.renderDetails()}
      </View>
    );
  }

  renderDetails() {
    if (this.state.expanded) {
      return <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
             />;
    }
  }

  onHeaderPress() {
    this.setState({ expanded: !this.state.expanded });
  }

  createDataSource({ data }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    
    this.dataSource = ds.cloneWithRows(data);
  }
  
  renderRow(data) {
    return <DetailsListItem details={data} />;
  }
};

const styles = {
  containerStyle: {
    paddingTop: 15
  }
}

const mapStateToProps = (state) => {
  const { data } = state.weather.details;
  return { data };
}

export default connect(mapStateToProps, null)(CurrentWeatherDetails);