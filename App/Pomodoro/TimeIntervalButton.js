
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import TimeIntervalPicker from './TimeIntervalPicker.js'

export default class TimeIntervalButton extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
  }

  state = {
    value: this.props.value,
    pickerOpen: false
  }

  //TODO: Fix function naming here

  dismissPicker = () => { this.setState({ pickerOpen: false }) }

  onPress = () => { this.setState({ pickerOpen: true }) }

  onTimeIntervalChange = (value) => { this.setState({ value }) }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={this.onPress} >
          <Text style={styles.text}>{this.state.value}</Text>
        </TouchableOpacity>
        <TimeIntervalPicker
          onValueChange={this.onTimeIntervalChange}
          dismissPicker={this.dismissPicker}
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
