
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import Timer from './Timer'
import SliderArrow from './SliderArrow'
import * as Interval from './intervals'
import PropTypes from 'prop-types'

//FIXME: 'cycle one' is hardwired, replace with prop

const IntervalSlider = ({
  onPressSliderArrows,
  onPressSwitchBreakButton,
  intervalText,
  currentTimer,
  currentInterval,
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

  return (
    <View style={styles.container}>
      <SliderArrow
        direction='left'
        onPress={onPressSliderArrows}
      />

      <View style={styles.timerWrapper}>
        <Text style={styles.intervalText}> cycle one </Text>
        <Text style={styles.intervalText}> {intervalText} </Text>
        <Timer minCount={currentTimer} style={styles.timer} />
        {switchBreakButton}
      </View>

      <SliderArrow
        direction='right'
        onPress={onPressSliderArrows}
      />
    </View>
  )
}

IntervalSlider.propTypes = {
  onPressSliderArrows: PropTypes.func.isRequired,
  onPressSwitchBreakButton: PropTypes.func.isRequired,
  intervalText: PropTypes.string.isRequired,
  currentTimer: PropTypes.number.isRequired,
  currentInterval: PropTypes.string.isRequired,
}

export default IntervalSlider

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
