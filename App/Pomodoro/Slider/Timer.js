import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'

//TODO: Add onTimeout prop, required.

export default class Timer extends Component {

  static propTypes = {
    minCount: PropTypes.number.isRequired,
    reset: PropTypes.bool.isRequired,
    onResetComplete: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      count: this.convertToSeconds(this.props.minCount),
      paused: true,
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    //In case the reset button was pressed
    if (nextProps.reset) {
      console.log('SHOULD_COMP_UPDATE')
      this.setState({paused: true})
      this.state.count = this.convertToSeconds(nextProps.minCount)
      this.props.onResetComplete()
      return true
    }

    //In the case where the time interval was changed mid-countdown
    if (this.props.minCount != nextProps.minCount) {
      this.state.count = this.convertToSeconds(nextProps.minCount)
      this.setState({paused: true})
      return true
    }

    //Unpausing when clicked
    if (this.state.paused && !nextState.paused) {
      this.interval = setInterval(this.decrease, 1000)
    }
    //Pausing when clicked
    if ((!this.state.paused && nextState.paused) || nextState.count < 0) {
      clearInterval(this.interval)
    }
    return nextState.count > -1
  }

  convertToSeconds = (m) => {
    if (m < 0) {throw new RangeError('Tentativa de converter tempo negativo.')}
    return m * 60
  }

  convertToMinutes = (t) => {
    if (t < 0) {throw new RangeError('Tentativa de converter tempo negativo.')}
    m = Math.floor(t / 60)
    s = t - (m * 60)
    return {mins: m, secs: s}
  }

  decrease = () => {
    this.setState( prevState => ({count: prevState.count - 1}) )
  }

  pause = () => {
    this.setState( prevState => ({paused: !this.state.paused}) )
  }

  zeroPadLeft = ({mins, secs}) => {
    mins = String('00' + mins).slice(-2)
    secs = String('00' + secs).slice(-2)
    return {mins, secs}
  }

  render() {
    const {mins, secs} = this.zeroPadLeft(this.convertToMinutes(this.state.count))

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.pause}>
        <Text style={styles.count}>{mins}:{secs}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1, //Don't use.
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'orange',
  },
  count: {
    fontSize: 60,
  }
})
