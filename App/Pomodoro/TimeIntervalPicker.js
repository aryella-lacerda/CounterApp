import React, { Component } from 'react'
import { View, Text, StyleSheet, Modal } from 'react-native'

export default class TimeIntervalPicker extends Component {

  static propTypes = {
    onPickerDismissed: PropTypes.number.isRequired,
    pickerVisible: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <Modal
        animationType='slide'
        transparent={false}
        visible={this.props.pickerVisible}
        onRequestClose={this.props.onPickerDismissed}
      >
        <Text>minutes</Text>
        
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
