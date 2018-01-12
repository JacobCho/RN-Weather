import React, { Component } from 'react';
import { 
  Modal, 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  ScrollView 
} from 'react-native';
import { getIconSource } from '../helpers/iconHelper';
import AlertsListItem from './AlertsListItem';

class AlertModal extends Component {
  renderAlerts() {
    return this.props.alerts.map((alert, index) => 
      <AlertsListItem key={index} alert={alert}/>
    );
  }

  render() {
    const { containerStyle, navBarStyle, navBarTitleStyle, closeImageStyle } = styles;

    return (
      <Modal
        visible={this.props.visible}
        animationType="slide"
        onRequestClose={() => this.props.onClosePress}
      >
        <ScrollView style={containerStyle} contentInset={{ top: 0, left: 0, bottom: 15, right: 0 }}>
          <View style={navBarStyle}>
            <TouchableOpacity onPress={this.props.onClosePress}>
              <Image source={getIconSource('close')} style={closeImageStyle}/>
            </TouchableOpacity>
            <Text style={navBarTitleStyle} pointerEvents="none">
              Alerts
            </Text>
          </View>
          {this.renderAlerts()}
        </ScrollView>
      </Modal>
    );
  }
};

export default AlertModal;

const styles = {
  containerStyle: {
  },
  navBarStyle: {
    height: 70,
    backgroundColor: 'red',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  navBarTitleStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 25,
    backgroundColor: 'transparent'
  },
  closeImageStyle: {
    position: 'absolute',
    start: 15,
    top: 30,
    height: 25,
    width: 25,
  }
};