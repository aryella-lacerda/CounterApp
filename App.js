import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

//Stylesheet.create recives an object
const styles = StyleSheet.create({
  fillAndCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  addCount = () => {
    this.setState(
        prevState => ({count: prevState.count + 1})
    );
  }

  subtractCount = () => {
    this.setState(
        prevState => ({count: prevState.count - 1})
    );
  }

  render () {
    return (
      <View style={styles.fillAndCenter}>
        <Text>{this.state.count}</Text>
        <Button
          title='Add'
          onPress={this.addCount}
        />
        <Button
          title='Subtract'
          onPress={this.subtractCount}
        />
      </View>
    );
  }
}
