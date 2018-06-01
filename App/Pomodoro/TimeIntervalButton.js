
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import TimeIntervalPicker from './TimeIntervalPicker.js'

export default class TimeIntervalButton extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    intervalType: PropTypes.string.isRequired,
    onTimeIntervalChange: PropTypes.func.isRequired,
  }

  state = {
    value: this.props.value,
    pickerOpen: false
  }

  closePicker = () => { this.setState({ pickerOpen: false }) }

  openPicker = () => { this.setState({ pickerOpen: true }) }

  onTimeIntervalChange = (value) => {
    console.log('TIME_INTERVAL_BUTTON')
    this.setState({ value })
    this.props.onTimeIntervalChange(this.props.intervalType, value)
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={this.openPicker}>
          <Text style={styles.text}>{this.state.value}</Text>
        </TouchableOpacity>
        <TimeIntervalPicker
          onValueChange={this.onTimeIntervalChange}
          dismissPicker={this.closePicker}
          pickerVisible={this.state.pickerOpen}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 50,
    padding: 5,
    backgroundColor: 'silver',
  },
  text: {
    fontSize: 20,
  }
})
