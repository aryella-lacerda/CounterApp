
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import TimeIntervalPicker from './TimeIntervalPicker.js'

export default class TimeIntervalButton extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value,
      pickerOpen: false
    }
  }

  onPickerDissmissed = () => {
    this.setState({
      pickerOpen: false,
    })
  }

  //TODO: Add newValue
  onPress = () => {
    this.setState({
      //value: newValue,
      pickerOpen: true,
    })
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={this.onPress} >
          <Text>{this.state.value}</Text>
        </TouchableOpacity>
        <Modal
          animationType='slide'
          transparent={false}
          visible={this.state.pickerOpen}
          onRequestClose={this.onPickerDissmissed}>
          <Text>This is a modal.</Text>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    padding: 15,
    backgroundColor: 'silver'
  },
})
