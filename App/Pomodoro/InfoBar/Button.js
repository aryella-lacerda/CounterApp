import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Picker from '../Picker'

export default class Button extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    intervalType: PropTypes.string.isRequired,
    pickerTitle: PropTypes.string.isRequired,
    pickerRangeLimit: PropTypes.number.isRequired,
    onTimeIntervalChange: PropTypes.func.isRequired,
  }

  state = {
    value: this.props.value,
    pickerOpen: false
  }

  closePicker = () => { this.setState({ pickerOpen: false }) }

  openPicker = () => { this.setState({ pickerOpen: true }) }

  onTimeIntervalChange = (value) => {
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
        <Picker
          title={this.props.pickerTitle}
          rangeLimit={this.props.pickerRangeLimit}
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
