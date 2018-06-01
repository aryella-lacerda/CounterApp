import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

const MinItem = ({value, onPress}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => onPress(value)}
    activeOpacity={0.5}>
    <Text style={styles.text}>{value}</Text>
  </TouchableOpacity>
)

MinItem.propTypes = {
  value: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default MinItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    //backgroundColor: 'green',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
})
