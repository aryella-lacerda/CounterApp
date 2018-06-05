import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import InfoBar from './InfoBar'
import * as Interval from './intervals'
import IntervalSlider from './IntervalSlider'
import Header from './Header'

//TODO: Rearrange files into folders.

export default class App extends Component {

  state = {
    workingStretch: 25,
    shortBreak: 5,
    longBreak: 15,
    workingStretchesToLongBreak: 4,

    currentInterval: Interval.WORKING_STRECH,
    currentBreakType: Interval.SHORT_BREAK,
    currentTimer: 25,
    currentCycle: 3,
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

  render() {
    return (
      <View style={styles.container} >

        <Header/>

        <IntervalSlider
          onPressSliderArrows={this.onPressSlider}
          onPressSwitchBreakButton={this.onPressSwitchBreak}
          intervalText={this.intervalText()}
          currentTimer={this.state.currentTimer}
          currentInterval={this.state.currentInterval}
          currentCycle={this.state.currentCycle}
        />

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
    //backgroundColor: 'yellow',
    //alignItems: 'stretch',
    justifyContent: 'center',
    //justifyContent: 'space-around',
  }
})
