
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

  onPickerDismissed = () => {
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
    console.log('Pressed!')
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={this.onPress} >
          <Text>{this.state.value}</Text>
        </TouchableOpacity>
        <TimeIntervalPicker
          onPickerDismissed={this.onPickerDismissed}
          pickerVisible={this.state.pickerOpen}
        />
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
