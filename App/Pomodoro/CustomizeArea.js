import React, { Component } from 'react'
import { View, Picker, StyleSheet } from 'react-native'

export default class CustomizeArea extends Component {
  constructor() {
    super()
    this.state = {
      selectedValue: 25
    }
  }

  onValueChange = (value) => {
    this.setState({selectedValue: value})
    console.log(value)
  }

   oneToSixty = () => {
    items = []
    for (i = 1; i <= 60; i++) {
      x = String(i)
      items.push(
        <Picker.Item
          key={x}
          label={x}
          value={x}
        />)
    }
    //console.log(items.length)
    return items
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          prompt='Choose number of minutes:'
          mode='dropdown'
          selectedValue={this.state.selectedValue}
          onValueChange={this.onValueChange}
        >
          <Picker.Item label='Testing' value='testing' />
          {this.oneToSixty()}
        </Picker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'orange'
  },
})
