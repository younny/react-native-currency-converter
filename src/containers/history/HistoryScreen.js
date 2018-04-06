// @flow
import * as React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native'
import _  from 'lodash'

import styles from './HistoryScreen.style'

type Props = {
    navigator: Object,
    history: Array,
    onConversionSelected: Function
};

class HistoryScreen extends React.PureComponent<Props> {

  _onConversionSelected = (set) => {
    this.props.navigator.pop({ animated: true })

    this.props.onConversionSelected(set)
  }

  _keyExtractor = (item, index) => `h-${index}`

  renderItem = ({ item }) => {
    const { KEY, DATE, RATE } = item
    const set = this.extractConversionSet(KEY)

    return(
      <TouchableOpacity style={styles.historyItem} onPress={() => this._onConversionSelected(set)}>
          <Text style={styles.headerText}>{`${set.fromCur} to ${set.toCur}`}</Text>
          <Text style={styles.dateText}>{DATE && DATE.toString()}</Text>
          <Text style={styles.dateText}>{RATE && RATE.toString()}</Text>
      </TouchableOpacity>
    )
  }

  extractConversionSet = (key: string="") => ({ fromCur: key.substring(0,3), toCur: key.substring(5,8) })


  // renderSection = (key, item) => {
  //   return (
  //       <FlatList
  //         keyExtractor={this._keyExtractor.bind(this, key)}
  //         renderItem={this.renderItem}
  //         ListHeaderComponent={this.renderSectionHeader(key)}
  //         data={item}
  //       />
  //   )
  // }

  render() {
    return (
        <View style={styles.container}>
            <FlatList
              keyExtractor={this._keyExtractor}
              renderItem={this.renderItem}
              data={this.props.history}
            />
        </View>
    )
  }
}

export default HistoryScreen
