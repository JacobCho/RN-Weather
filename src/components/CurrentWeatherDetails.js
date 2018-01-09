import React, { Component } from 'react';
import { View, Text, LayoutAnimation } from 'react-native';
import Header from './Header';

class CurrentWeatherDetails extends Component {
  state = { expanded: false }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Header onPress={this.onHeaderPress.bind(this)}>Details</Header>
        {this.renderDetails()}
      </View>
    );
  }

  renderDetails() {
    if (this.state.expanded) {
      return <Text>Expanded</Text>;
    }
  }

  onHeaderPress() {
    this.setState({ expanded: !this.state.expanded });
  }
};

const styles = {
  containerStyle: {
    paddingTop: 15
  }
}

export default CurrentWeatherDetails;