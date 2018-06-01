import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Timer from './Timer.js'
import InfoBar from './InfoBar.js'
import * as States from './states.js'

//FIXME: Swap states out for constants.

export default class App extends Component {

  state = {
    intervalWorkingStretch: 25,
    intervalShortBreak: 5,
    intervalLongBreak: 15,
    workingStretchesToLongBreak: 4,
    current: States.WORKING_STRECH,
  }

  updateInterval = (intervalType, intervalValue) => {
    console.log(intervalType, intervalValue)
    intervalValue = Number(intervalValue)
    switch (intervalType) {
      case States.WORKING_STRECH:
        this.setState({intervalWorkingStretch: intervalValue})
        break
      case States.SHORT_BREAK:
        this.setState({intervalShortBreak: intervalValue})
        break
      case States.LONG_BREAK:
        this.setState({intervalLongBreak: intervalValue})
        break
    }
  }

  currentTimer = () => {
    switch (this.state.current) {
      case States.WORKING_STRECH:
        return this.state.intervalWorkingStretch
        break
      case States.SHORT_BREAK:
        return this.state.intervalShortBreak
        break
      case States.LONG_BREAK:
        return this.state.intervalLongBreak
        break
      default:
        return 0
    }
  }

  //App -> InfoBar -> InfoSquare -> TimeIntervalButton

  render() {
    return (
      <View style={styles.container} >
        <Timer
          minCount={this.currentTimer()}
          style={styles.timer}
        />
        <InfoBar
          onTimeIntervalChange={this.updateInterval}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'yellow',
    alignItems: 'stretch',
    justifyContent: 'center',
    //justifyContent: 'space-around',
  }
})
