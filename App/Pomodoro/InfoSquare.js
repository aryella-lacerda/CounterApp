import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types'

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

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.value}</Text>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
