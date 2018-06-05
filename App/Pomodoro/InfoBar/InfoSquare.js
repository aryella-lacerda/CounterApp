import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types'
import Button from './Button.js'

export default class InfoSquare extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    pickerTitle: PropTypes.string.isRequired,
    pickerRangeLimit: PropTypes.number.isRequired,
    intervalType: PropTypes.string.isRequired,
    onTimeIntervalChange: PropTypes.func.isRequired,
  }

  breakString = (str) => {
    arr = []
    str = str.split(' ')
    for (i = 0; i < str.length; i++) {
      arr.push(<Text key={i}>{str[i]}</Text>)
    }
    return arr
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          pickerTitle={this.props.pickerTitle}
          pickerRangeLimit={this.props.pickerRangeLimit}
          value={this.props.value}
          intervalType={this.props.intervalType}
          onTimeIntervalChange={this.props.onTimeIntervalChange}
        />
        {this.breakString(this.props.text)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    //backgroundColor: 'blue'
  },
});
