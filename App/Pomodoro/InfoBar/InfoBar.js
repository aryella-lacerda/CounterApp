import React from 'react'
import { View, StyleSheet} from 'react-native'
import InfoSquare from './InfoSquare'
import PropTypes from 'prop-types'
import * as Interval from '../intervals'

const InfoBar = ({
  onTimeIntervalChange,
  workingStretchValue,
  shortBreakValue,
  longBreakValue,
  cyclesToLongBreakValue,
}) => (

  <View style={styles.container}>
    <InfoSquare
      text='work stretch'
      value={workingStretchValue}
      intervalType={Interval.WORKING_STRECH}
      pickerTitle='minutes'
      pickerRangeLimit={60}
      onTimeIntervalChange={onTimeIntervalChange}
    />
    <InfoSquare
      text='short break'
      value={shortBreakValue}
      intervalType={Interval.SHORT_BREAK}
      pickerTitle='minutes'
      pickerRangeLimit={60}
      onTimeIntervalChange={onTimeIntervalChange}
    />
    <InfoSquare
      text='long break'
      value={longBreakValue}
      intervalType={Interval.LONG_BREAK}
      pickerTitle='minutes'
      pickerRangeLimit={60}
      onTimeIntervalChange={onTimeIntervalChange}
    />
    <InfoSquare
      text='pomo cycles'
      value={cyclesToLongBreakValue}
      intervalType={Interval.CYCLES_TO_LONG_BREAK}
      pickerTitle='cycles'
      pickerRangeLimit={20}
      onTimeIntervalChange={onTimeIntervalChange}
    />
  </View>
)

InfoBar.propTypes = {
  onTimeIntervalChange: PropTypes.func.isRequired,
  workingStretchValue: PropTypes.number.isRequired,
  shortBreakValue: PropTypes.number.isRequired,
  longBreakValue: PropTypes.number.isRequired,
  cyclesToLongBreakValue: PropTypes.number.isRequired,
}

export default InfoBar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //backgroundColor: 'red',
    paddingLeft: 15,
    paddingRight: 15,
    //alignItems: 'flex-start',
  },
})
