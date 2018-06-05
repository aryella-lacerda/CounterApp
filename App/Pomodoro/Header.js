import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar, Header, Icon } from 'react-native-elements'

export default class AppHeader extends Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: 'Pomodoro', style: { fontSize: 22 }}}
          rightComponent={
            <Icon
              name='login'
              type='simple-line-icon'
              //size={18}
            />}
          backgroundColor='gray'
        />
        <Avatar
          large
          rounded
          title="AL"
          containerStyle={styles.avatar}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: 'black',
  },
  avatar: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 15,
    left: 15,
  }
})
