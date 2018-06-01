import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Enum from 'enumify'
import Timer from './Timer.js'
import InfoBar from './InfoBar.js'

class States extends Enum {}
States.initEnum([
  'WORKING_STRECH',
  'SHORT_BREAK',
  'LONG_BREAK',
]);

export default class App extends Component {

  state = {
    intervalWorkingStretch: 25,
    intervalShortBreak: 5,
    intervalLongBreak: 15,
    workingStretchesToLongBreak: 4,
    current: States.WORKING_STRETCH,
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer style={styles.timer} />
        <InfoBar />
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
