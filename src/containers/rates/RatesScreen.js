// @flow
import * as React from 'react'
import {
    View,
    ScrollView,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native'

import styles from './RatesScreen.style'

type Props = {
    rates: Array<Object>,
    onCurrencySelected: Function,
    loc: String,
    componentId: any
};

class RatesScreen extends React.PureComponent<Props> {

  _onCurrencySelected = (c) => {
    this.props.navigator.pop({ animated: true })

    this.props.onCurrencySelected(c, this.props.loc)
  }

  _keyExtractor = (item, idx) => `r-${idx}`

  renderItem = ({ item }: Object) => {
    return(
      <TouchableOpacity style={styles.rateItem} onPress={() => this._onCurrencySelected(item)}>
        <Text style={styles.rateItemText}>{item.currency}</Text>
      </TouchableOpacity>
    )
  }

  render(){
    return (
        <View style={styles.container}>
            <ScrollView style={styles.contentContainer}>
              <FlatList
                initialNumToRender={10}
                keyExtractor={this._keyExtractor}
                data={this.props.rates}
                renderItem={this.renderItem}
              />
            </ScrollView>
        </View>
    )
  }
}

export default RatesScreen
