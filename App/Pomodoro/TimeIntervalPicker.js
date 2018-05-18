import React, { Component } from 'react'
import { View, FlatList, Text, StyleSheet, Modal } from 'react-native'
import PropTypes from 'prop-types'

export default class TimeIntervalPicker extends Component {

  static propTypes = {
    onPickerDismissed: PropTypes.func.isRequired,
    pickerVisible: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.mins = this.createObjArray(60)
  }

  createObjArray = (n) => {
    arr = []
    for (const i = 1; i <= n; i++) {
      arr.push({key: String(i)})
    }
    return arr
  }

  renderItem = ({item}) => <Text style={styles.listItem}>{item.key}</Text>

  render() {
    return (
      <Modal
        animationType='slide'
        transparent={false}
        visible={this.props.pickerVisible}
        onRequestClose={this.props.onPickerDismissed}
      >
        <View style={styles.container}>
          <Text style={styles.text}>minutes</Text>
          <FlatList
            style={styles.list}
            data={this.mins}
            renderItem={this.renderItem}
          />
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'green',
  },
  listItem: {
    backgroundColor: 'purple',
    justifyContent: 'center',
  },
  list: {
    backgroundColor: 'red'
  }
})
