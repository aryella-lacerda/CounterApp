import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
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
    currentBreakType: Interval.SHORT_BREAK,
    currentTimer: 25,
    currentCycle: 1,
  }

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

    //If the time interval altered was the current interval, change timer.
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

  onPressSlider = () => {
    if (this.state.currentInterval === Interval.WORKING_STRECH) {

      if (this.state.currentBreakType === Interval.SHORT_BREAK) {
        this.setState({
          currentInterval: Interval.SHORT_BREAK,
          currentTimer: this.state.shortBreak,
        })
      }
      else if (this.state.currentBreakType === Interval.LONG_BREAK) {
        this.setState({
          currentInterval: Interval.LONG_BREAK,
          currentTimer: this.state.longBreak,
        })
      }

    }

    if (this.state.currentInterval === Interval.SHORT_BREAK ||
        this.state.currentInterval === Interval.LONG_BREAK) {
      this.setState({
        currentInterval: Interval.WORKING_STRECH,
        currentTimer: this.state.workingStretch,
      })
    }
  }

  onPressSwitchBreak = () => {
    if (this.state.currentInterval === Interval.SHORT_BREAK) {
      this.setState({
        currentInterval: Interval.LONG_BREAK,
        currentBreakType: Interval.LONG_BREAK,
        currentTimer: this.state.longBreak,
      })
    }

    if (this.state.currentInterval === Interval.LONG_BREAK) {
      this.setState({
        currentInterval: Interval.SHORT_BREAK,
        currentBreakType: Interval.SHORT_BREAK,
        currentTimer: this.state.shortBreak,
      })
    }
  }

  renderSwitchBreak = () => {
    if (this.state.currentInterval === Interval.SHORT_BREAK) {
      return (<TouchableOpacity onPress={this.onPressSwitchBreak}>
        <Text style={[styles.intervalText, styles.switchBreakText]}>
          switch to long break
        </Text>
      </TouchableOpacity>)
    }

    if (this.state.currentInterval === Interval.LONG_BREAK) {
      return (<TouchableOpacity onPress={this.onPressSwitchBreak}>
        <Text style={[styles.switchBreakText, styles.intervalText]}>
          switch to short break
        </Text>
      </TouchableOpacity>)
    }

    return (<Text
      style={[styles.switchBreakText, styles.intervalText, styles.placeholderText]}>
      position holder
    </Text>)
  }

  render() {
    return (
      <View style={styles.container} >

        <View style={styles.intervalWrapper}>
          <Icon
            iconStyle={styles.icon}
            size={40}
            underlayColor='transparent'
            name='chevron-thin-left'
            type='entypo'
            onPress={this.onPressSlider}
          />

          <View style={styles.timerWrapper}>
            <Text style={styles.intervalText}>
            cycle one</Text>
            <Text style={styles.intervalText}>{this.intervalText()}</Text>
            <Timer
              minCount={this.state.currentTimer}
              style={styles.timer}
            />
            {this.renderSwitchBreak()}
          </View>

          <Icon
            iconStyle={styles.icon}
            size={40}
            underlayColor='transparent'
            name='chevron-thin-right'
            type='entypo'
            onPress={this.onPressSlider}
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
  switchBreakText: {
    marginTop: 12,
  },
  placeholderText: {
    backgroundColor: 'transparent',
    color: 'transparent',
  },
  icon: {
    padding: 10,
    backgroundColor: 'blue'
  },
})
