import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Linking } from 'react-native';
import { getLongDateString } from '../helpers/timeHelper';

class AlertListItem extends Component {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { title, description, severity, uri, time, expires } = this.props.alert;
    const { 
      containerStyle, 
      textStyle, 
      titleStyle, 
      spacingStyle,
      timeContainerStyle,
      timeTextStyle,
      urlStyle
    } = styles;

    return (
      <View style={containerStyle}>
        <Text style={[textStyle, titleStyle]}>
          {title}
        </Text>
        <Text style={[textStyle, spacingStyle]}>
          {description}
        </Text>
        <Text style={[textStyle, spacingStyle]}>
          Severity: {this.capitalizeFirstLetter(severity)}
        </Text>
        <Text style={[textStyle, spacingStyle]}>
          Issued: {getLongDateString(time)}
        </Text>
        <Text style={[textStyle, spacingStyle]}>
          Expires: {getLongDateString(expires)}
        </Text>
        <TouchableWithoutFeedback onPress={() => Linking.openURL(uri)}>
          <View style={spacingStyle}>
            <Text style={[textStyle, urlStyle]}>{uri}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
};

const styles = {
  containerStyle: {
    paddingTop: 15
  },
  textStyle: {
    paddingLeft: 15,
    paddingRight: 15
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  spacingStyle: {
    paddingTop: 10
  },
  urlStyle: {
    textDecorationLine: 'underline'
  }
}

export default AlertListItem;