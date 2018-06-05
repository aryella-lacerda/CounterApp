import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import Timer from './Timer'
import Arrow from './Arrow'
import * as Interval from '../intervals'
import PropTypes from 'prop-types'

export default class Slider extends Component {

  state = { resetTimer: false }

  onResetTimer = () => {
    this.setState({ resetTimer: true })
    console.log(`ON_RESET_TIMER: this.state.resetTimer === true`)
  }

  onResetComplete = () => {
    this.setState({ resetTimer: false })
    console.log(`ON_RESET_COMPLETE: this.state.resetTimer === false`)
  }

  switchBreakButton = () => {
    let switchBreakButton = null
    if (this.props.currentInterval === Interval.SHORT_BREAK) {
      switchBreakButton = (
        <TouchableOpacity onPress={this.props.onPressSwitchBreakButton}>
          <Text style={[styles.intervalText, styles.switchBreakText]}>
            switch to long break
          </Text>
        </TouchableOpacity>
      )
    }
    else if (this.props.currentInterval === Interval.LONG_BREAK) {
      switchBreakButton = (
        <TouchableOpacity onPress={this.props.onPressSwitchBreakButton}>
          <Text style={[styles.switchBreakText, styles.intervalText]}>
            switch to short break
          </Text>
        </TouchableOpacity>
      )
    }
    else {
      switchBreakButton = (
        <TouchableOpacity onPress={this.onResetTimer}>
          <Text
            style={[styles.switchBreakText, styles.intervalText]}>
            reset counter
          </Text>
        </TouchableOpacity>
      )
    }
    return switchBreakButton
  }

  digitToString = (d) => {
    if (typeof d !== 'number') {throw new TypeError('Argument must be a number.')}
    else if (d < 1 || d > 20) {throw new RangeError('Argument must be a number between 1 and 20.')}

    str = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twnety']
    return str[d]
  }

  render() {
    return (
      <View style={styles.container}>
        <Arrow
          direction='left'
          onPress={this.props.onPressArrows}
        />

        <View style={styles.timerWrapper}>
          <Text style={styles.intervalText}>
            cycle {this.digitToString(this.props.currentCycle)}
          </Text>
          <Text style={styles.intervalText}>
            {this.props.intervalText}
          </Text>
          <Timer
            minCount={this.props.currentTimer}
            style={styles.timer}
            reset={this.state.resetTimer}
            onResetComplete={this.onResetComplete}
          />
          {(this.state.resetTimer) ? console.log('RENDER YES') : console.log('RENDER NO')}
          {this.switchBreakButton()}
        </View>

        <Arrow
          direction='right'
          onPress={this.props.onPressArrows}
        />
      </View>
    )
  }
}

Slider.propTypes = {
  onPressArrows: PropTypes.func.isRequired,
  onPressSwitchBreakButton: PropTypes.func.isRequired,
  intervalText: PropTypes.string.isRequired,
  currentTimer: PropTypes.number.isRequired,
  currentInterval: PropTypes.string.isRequired,
  currentCycle: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'black',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  timerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'purple',
  },
  intervalText: {
    paddingVertical: 2,
    width: 200,
    fontSize: 15,
    borderRadius: 10,
    //backgroundColor: 'white',
    textAlign: 'center',
    marginBottom: 12,
  },
  switchBreakText: {
    marginTop: 12,
  },
  placeholderText: {
    backgroundColor: 'transparent',
    color: 'transparent',
  },
})
