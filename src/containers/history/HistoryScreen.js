// @flow
import * as React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SectionList,
    FlatList
} from 'react-native'
import _  from 'lodash'

import styles from './HistoryScreen.style'

type Props = {
    navigator: Object,
    history: Object,
    onConversionSelected: Function
};

class HistoryScreen extends React.PureComponent<Props> {

  _onConversionSelected = (set) => {
    this.props.navigator.pop({ animated: true })

    this.props.onConversionSelected(set)
  }

  _keyExtractor = (item, index) => `h-${index}`

  renderItem = ({ item }) => {
    const set = this.extractConversionSet(item)
    return(
      <TouchableOpacity style={styles.historyItem} onPress={() => this._onConversionSelected(set)}>
        <View style={[styles.row, styles.dataRow]}>
            <Text style={styles.headerText}>{`${set.fromCur} to ${set.toCur}`}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  extractConversionSet = (key) => ({ fromCur: key.substring(0,3), toCur: key.substring(5,8) })


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
              data={Object.keys(this.props.history)}
            />
        </View>
    )
  }
}

export default HistoryScreen
