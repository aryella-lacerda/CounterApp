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

  renderItem = ({item}) =>
  <View style={styles.listItemContainer}>
    <Text style={styles.text}>{item.key}</Text>
  </View>

  render() {
    return (
      <Modal
        animationType='slide'
        transparent={false}
        visible={this.props.pickerVisible}
        onRequestClose={this.props.onPickerDismissed}
      >
        <View style={styles.container}>
          <Text style={[styles.text, styles.minutes]}>minutes</Text>
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
  minutes: {
    marginHorizontal: 100,
    marginBottom: 15,
    borderBottomWidth: 1,
    //backgroundColor: 'green',
  },
  container: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 70,
    //backgroundColor: 'yellow',
    alignItems: 'stretch',
    //justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    //backgroundColor: 'green',
  },
  listItemContainer: {
    alignItems: 'center',
  },
  list: {
    //backgroundColor: 'red'
  }
})
