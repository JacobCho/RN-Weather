import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {

  render() {
    const { containerStyle, headerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text style={headerStyle}>{this.props.children}</Text>
      </View>
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