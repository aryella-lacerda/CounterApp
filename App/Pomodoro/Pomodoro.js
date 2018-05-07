import React, {Component} from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  fillAndCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 40,
  }
})

class Timer extends Component {

  static propTypes = {
    timerOverCallback: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      timerOverCallback: this.props.timerOverCallback,
      count: this.props.count,
    }
  }

  decrease = () => {
    this.setState(
        prevState => ({count: prevState.count - 1})
    )
  }

  componentDidMount = () => {
    this.interval = setInterval(this.decrease, 1000)
  }

  componentDidUpdate = () => {
    if (!(this.state.count-1)) {
      this.props.timerOverCallback()
    }
  }

  componentWillUnmount = () => { clearInterval(this.interval) }

  render() {
    return (
      <Text style={styles.count}>{this.state.count}</Text>
    )
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      timerOn: false,
    }
  }

  toggleTimer = () => {
    this.setState(
      prevState => ({timerOn: !prevState.timerOn})
    )
  }

  render() {
    return (
      <View
        style={styles.fillAndCenter}>
        {this.state.timerOn ?
          <Timer
            count={1000}
            timerOverCallback={this.toggleTimer}
          /> : <View/>
        }
        <Button
          title='Toggle Timer'
          onPress={this.toggleTimer}
        />
        <Text>
          {this.state.timerOn ? 'On' : 'Off'}
        </Text>
      </View>
    )
  }
}
