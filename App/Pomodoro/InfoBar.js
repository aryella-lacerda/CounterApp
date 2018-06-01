import React from 'react'
import { View, StyleSheet} from 'react-native'
import InfoSquare from './InfoSquare'
import PropTypes from 'prop-types'
import * as Interval from './states'

const InfoBar = (props) => (

  <View style={styles.container}>
    <InfoSquare
      text='work stretch'
      value={25}
      intervalType={Interval.WORKING_STRECH}
      onTimeIntervalChange={props.onTimeIntervalChange}
    />
    <InfoSquare
      text='short break'
      value={5}
      intervalType={Interval.SHORT_BREAK}
      onTimeIntervalChange={props.onTimeIntervalChange}
    />
    <InfoSquare
      text='long break'
      value={15}
      intervalType={Interval.LONG_BREAK}
      onTimeIntervalChange={props.onTimeIntervalChange}
    />
    <InfoSquare
      text='pomo cycles'
      value={4}
      intervalType={Interval.CYCLES_TO_LONG_BREAK}
      onTimeIntervalChange={props.onTimeIntervalChange}
    />
  </View>
)

InfoBar.propTypes = { onTimeIntervalChange: PropTypes.func.isRequired }

export default InfoBar

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: 'yellow',
    paddingLeft: 15,
    paddingRight: 15,
    //alignItems: 'flex-start',
  },
})
