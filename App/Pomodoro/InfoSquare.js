import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types'
import TimeIntervalButton from './TimeIntervalButton.js'

export default class InfoSquare extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value,
    }
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
        <TimeIntervalButton 
          value={this.state.value} />
        {this.breakString(this.props.text)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    //backgroundColor: 'green',
  },
});
