import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import { getIconSource } from '../helpers/iconHelper';

class AlertModal extends Component {
  render() {
    const { containerStyle, navBarStyle, closeImageStyle } = styles;

    return (
      <Modal
        visible={this.props.visible}
        animationType="slide"
        onRequestClose={() => {}}
      >
        <View style={containerStyle}>
          <View style={navBarStyle}>
            <TouchableOpacity onPress={this.props.onClosePress}>
              <Image source={getIconSource('close')} style={closeImageStyle}/>
            </TouchableOpacity>
          </View>
        </View>
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
  closeImageStyle: {
    position: 'absolute',
    start: 15,
    top: 30,
    height: 30,
    width: 30,
  }
};