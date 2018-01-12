import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getIconSource } from '../helpers/iconHelper';
import { getHoursFromUnix } from '../helpers/timeHelper';
import AlertModal from './AlertModal';

class CurrentWeather extends Component {
  state = { showModal: false };

  renderAlertButton() {
    if (this.props.alerts.length > 0) {
      return (
        <TouchableOpacity onPress={this.alertButtonPressed.bind(this)}>
          <Image source={getIconSource('warning')} style={styles.alertStyle}/>
        </TouchableOpacity>
      );
    }
  }

  alertButtonPressed() {
    this.setState({ showModal: true });
  }

  modalClosePressed() {
    this.setState({ showModal: false });
  }

  render() {
    const { 
      containerStyle, 
      locationContainerStyle,
      locationTextStyle, 
      lastUpdatedTextStyle,
      degreesContainerStyle,
      degreesTextStyle, 
      weatherContainerStyle,
      weatherTextStyle,
      iconStyle
    } = styles;

    const { address, temperature, summary, icon, time, alerts } = this.props;
    const iconSource = getIconSource(icon);
    
    return (
      <View>
        {this.renderAlertButton()}
        <View style={[containerStyle, locationContainerStyle]} pointerEvents="none">
          <Text style={locationTextStyle}>
            {address}
          </Text>
          <Text style={lastUpdatedTextStyle}>
            {`Last Updated: ${getHoursFromUnix(time, true)}`}
          </Text>
        </View>
        <View style={[containerStyle, degreesContainerStyle]}>
          <Text style={degreesTextStyle}>
            {temperature}°C
          </Text>
        </View>
        <View style={[containerStyle, weatherContainerStyle]}>
          <Image source={iconSource} style={iconStyle} />
          <Text style={weatherTextStyle}>
            {summary}
          </Text>
        </View>
        <AlertModal alerts={alerts} visible={this.state.showModal} onClosePress={this.modalClosePressed.bind(this)}/>
      </View>
    );
  }
}

const styles = {
  alertStyle: {
    position: 'absolute',
    start: 15,
    top: 40,
    height: 30,
    width: 30,
  },
  containerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  locationContainerStyle: {
    paddingTop: 40,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  locationTextStyle: {
    fontSize: 18,
    textAlign: 'center'
  },
  lastUpdatedTextStyle: {
    fontSize: 8,
    textAlign: 'center',
  },
  degreesContainerStyle: {
    paddingTop: 50
  },
  degreesTextStyle: {
    fontSize: 40,
    flex: 1,
    textAlign: 'center',
  },
  weatherContainerStyle: {
    paddingTop: 20
  },
  weatherTextStyle: {
    fontSize: 18,
    textAlign: 'center',
    paddingLeft: 10,
    paddingTop: 5,
  },
  iconStyle: {
    width: 30,
    height: 30,
    justifyContent: 'flex-end',
  }
};

const mapStateToProps = (state) => {
  const { temperature, summary, icon, time } = state.weather.currently;
  const { address } = state.geolocation;
  const { alerts } = state.weather;
  
  return { temperature, summary, icon, time, alerts, address };
};

export default connect(mapStateToProps, null)(CurrentWeather);