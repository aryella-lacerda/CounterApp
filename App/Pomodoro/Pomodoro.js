import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Timer from './Timer.js'
import InfoBar from './InfoBar.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer
          style={styles.timer}
        />
        <InfoBar />
      </View>
    )
  }
}
