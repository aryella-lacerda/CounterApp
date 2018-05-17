import React from 'react'
import { View, StyleSheet} from 'react-native'
import InfoSquare from './InfoSquare.js'

const InfoBar = ({}) => (
  <View style={styles.container}>
    <InfoSquare
      text='work stretch'
      value={45}
    />
    <InfoSquare
      text='short break'
      value={45}
    />
    <InfoSquare
      text='long break'
      value={45}
    />
    <InfoSquare
      text='pomo cycles'
      value={45}
    />
  </View>
)

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
