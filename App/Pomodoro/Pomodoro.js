import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'
import Timer from './Timer'
import InfoBar from './InfoBar'
import * as Interval from './intervals'

//FIXME: Move IntervalSlider into a seperate file
//FIXME: Move SliderArrows into a seperate file

export default class App extends Component {

  state = {
    workingStretch: 25,
    shortBreak: 5,
    longBreak: 15,
    workingStretchesToLongBreak: 4,

    currentInterval: Interval.WORKING_STRECH,
    currentCycle: 1,
  }

  //FIXME: setState for currentTimer in all possible scenarios?
  //App -> InfoBar -> InfoSquare -> TimeIntervalButton
  updateInterval = (updatedIntervalType, updatedIntervalValue) => {
    updatedIntervalValue = Number(updatedIntervalValue)

    //Update time intervals, independent of current timer.
    switch (updatedIntervalType) {
      case Interval.WORKING_STRECH:
        this.setState({workingStretch: updatedIntervalValue})
        break
      case Interval.SHORT_BREAK:
        this.setState({shortBreak: updatedIntervalValue})
        break
      case Interval.LONG_BREAK:
        this.setState({longBreak: updatedIntervalValue})
        break
      case Interval.CYCLES_TO_LONG_BREAK:
        this.setState({workingStretchesToLongBreak: updatedIntervalValue})
        break
    }

    //If current time interval is the one that was updated...
    if (this.state.currentInterval == updatedIntervalType) {
      this.setState({currentTimer: updatedIntervalValue})
    }
  }

  intervalText = () => {
    switch(this.state.currentInterval) {
      case Interval.WORKING_STRECH:
        return 'working stretch'
      case Interval.SHORT_BREAK:
        return 'short break'
      case Interval.LONG_BREAK:
        return 'long break'
    }
  }

  currentTimer = () => {
    switch (this.state.currentInterval) {
      case Interval.WORKING_STRECH:
        return this.state.workingStretch
      case Interval.SHORT_BREAK:
        return this.state.shortBreak
      case Interval.LONG_BREAK:
        return this.state.shortBreak
    }
  }

  onPress = () => {
    if (this.state.currentInterval === Interval.WORKING_STRECH) {
      this.setState({
        currentInterval: Interval.SHORT_BREAK,
        currentTimer: this.state.shortBreak,
      })
    }

    if (this.state.currentInterval === Interval.SHORT_BREAK ||
        this.state.currentInterval === Interval.LONG_BREAK) {
      this.setState({
        currentInterval: Interval.WORKING_STRECH,
        currentTimer: this.state.workingStretch,
      })
    }
  }

  switchBreak = () => {
    if (this.state.currentInterval === Interval.SHORT_BREAK) {
      return <Text style={styles.intervalText}>switch to long break</Text>
    }

    if (this.state.currentInterval === Interval.LONG_BREAK) {
      return <Text style={styles.intervalText}>switch to short break</Text>
    }

    return <Text style={styles.intervalText}>position holder</Text>
  }

  render() {
    return (
      <View style={styles.container} >

        <View style={styles.intervalWrapper}>
          <Icon
            iconStyle={styles.icon}
            size={40}
            name='chevron-thin-left'
            type='entypo'
            onPress={this.onPress}
          />

          <View style={styles.timerWrapper}>
            <Text style={styles.intervalText}>
            cycle one</Text>
            <Text style={styles.intervalText}>{this.intervalText()}</Text>
            <Timer
              minCount={this.currentTimer()}
              style={styles.timer}
            />
            {this.switchBreak()}
          </View>

          <Icon
            iconStyle={styles.icon}
            size={40}
            name='chevron-thin-right'
            type='entypo'
            onPress={this.onPress}
          />
        </View>

        <InfoBar
          onTimeIntervalChange={this.updateInterval}
          workingStretchValue={this.state.workingStretch}
          shortBreakValue={this.state.shortBreak}
          longBreakValue={this.state.longBreak}
          cyclesToLongBreakValue={this.state.workingStretchesToLongBreak}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    //alignItems: 'stretch',
    justifyContent: 'center',
    //justifyContent: 'space-around',
  },
  intervalWrapper: {
    backgroundColor: 'black',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  timerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  intervalText: {
    paddingVertical: 2,
    width: 200,
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    textAlign: 'center',
    marginBottom: 12,
  },
  icon: {
    padding: 10,
    backgroundColor: 'blue'
  }
})
