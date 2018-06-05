
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Icon } from 'react-native-elements'

const SliderArrow = ({onPress, direction}) => {

  if (direction === 'right') direction='chevron-thin-right'
  else if (direction === 'left') direction='chevron-thin-left'
  else {
    throw new Error('SliderArrow direction not valid. Valid values: "left", "right".')
  }

  return (
    <Icon
      iconStyle={styles.icon}
      color='gray'
      size={40}
      underlayColor='transparent'
      name={direction}
      type='entypo'
      onPress={onPress}
    />
  )
}

SliderArrow.propTypes = {
  onPress: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
}

export default SliderArrow

const styles = StyleSheet.create({
  icon: {
    padding: 10,
    //backgroundColor: 'blue'
  }
})
