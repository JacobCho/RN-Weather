import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

class Header extends Component {

  render() {
    const { containerStyle, headerStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={containerStyle}>
          <Text style={headerStyle}>{this.props.children}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

export default Header;

const styles = {
  containerStyle: {
    height: 30,
    backgroundColor: 'grey',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  headerStyle: {
    paddingLeft: 15,
    paddingRight: 15, 
    fontWeight: 'bold',
    color: 'white'
  },
};