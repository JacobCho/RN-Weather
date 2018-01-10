import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DetailsListItem extends Component {
  renderData() {
    const { innerContainerStyle, descriptionTextStyle, valueTextStyle } = styles;
    return this.props.details.data.map((details, index) => 
      <View key={`this.props.details.key${index}`} style={innerContainerStyle}>
        <Text style={descriptionTextStyle}>
          {details.description}
        </Text>
        <Text style={valueTextStyle}>
          {details.value}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        {this.renderData()}
      </View>
    );
  }
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1
  },
  innerContainerStyle: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start'
  }, 
  descriptionTextStyle: {
    paddingTop: 5,
    paddingLeft: 15,
    fontSize: 12,
    fontWeight: '700'
  },
  valueTextStyle: {
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 15,
    fontSize: 15
  }
}

export default DetailsListItem;