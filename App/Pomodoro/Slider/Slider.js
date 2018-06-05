import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import Timer from './Timer'
import Arrow from './Arrow'
import * as Interval from '../intervals'
import PropTypes from 'prop-types'

//TODO: Replace 'placeholder' with 'reset'

const Slider = ({
  onPressArrows,
  onPressSwitchBreakButton,
  intervalText,
  currentTimer,
  currentInterval,
  currentCycle,
}) => {

  let switchBreakButton = null
  if (currentInterval === Interval.SHORT_BREAK) {
    switchBreakButton = (
      <TouchableOpacity onPress={onPressSwitchBreakButton}>
        <Text style={[styles.intervalText, styles.switchBreakText]}>
          switch to long break
        </Text>
      </TouchableOpacity>
    )
  }
  else if (currentInterval === Interval.LONG_BREAK) {
    switchBreakButton = (
      <TouchableOpacity onPress={onPressSwitchBreakButton}>
        <Text style={[styles.switchBreakText, styles.intervalText]}>
          switch to short break
        </Text>
      </TouchableOpacity>
    )
  }
  else {
    switchBreakButton = (
      <Text
        style={[styles.switchBreakText, styles.intervalText, styles.placeholderText]}>
        position holder
      </Text>
    )
  }

  digitToString = (d) => {
    if (typeof d !== 'number') {throw new TypeError('Argument must be a number.')}
    else if (d < 1 || d > 20) {throw new RangeError('Argument must be a number between 1 and 20.')}

    str = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twnety']
    return str[d]
  }

  return (
    <View style={styles.container}>
      <Arrow
        direction='left'
        onPress={onPressArrows}
      />

      <View style={styles.timerWrapper}>
        <Text style={styles.intervalText}> cycle {this.digitToString(currentCycle)}</Text>
        <Text style={styles.intervalText}> {intervalText} </Text>
        <Timer minCount={currentTimer} style={styles.timer} />
        {switchBreakButton}
      </View>

      <Arrow
        direction='right'
        onPress={onPressArrows}
      />
    </View>
  )
}

Slider.propTypes = {
  onPressArrows: PropTypes.func.isRequired,
  onPressSwitchBreakButton: PropTypes.func.isRequired,
  intervalText: PropTypes.string.isRequired,
  currentTimer: PropTypes.number.isRequired,
  currentInterval: PropTypes.string.isRequired,
  currentCycle: PropTypes.number.isRequired,
}

export default Slider

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
