// @flow
import * as React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import ConvertActions from '../../redux/converter/actions'
import HistoryActions from '../../redux/history/actions'

import { InputBox } from '../../components'

import styles from './HomeScreen.style'


type Props = {
    getRates: Function,
    saveConversion: Function,
    store: Object,
    rates: Array<Object>,
    history: Object,
    navigator: Object
};

type State = {
    result: number,
    fromCur: string,
    toCur: string,
    rate: number
};

class HomeScreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            input: 0,
            result: 0,
            fromCur: 'EUR',
            toCur: 'EUR',
            rate: 1
        }
    }

    showCurrencies = (loc) => {
      // Navigation.showModal({
      //   component: {
      //     name: 'rates',
      //     passProps: { rates: this.props.rates, onCurrencySelected: this._onCurrencySelected, loc } }
      // })

      this.props.navigator.push({
          screen: 'rates',
          passProps: { rates: this.props.rates, onCurrencySelected: this._onCurrencySelected, loc },
        })
    }

    findRate = (cur) => _.find(this.props.rates, (r) => r.currency == cur).rate

    getRate = (fromCur, rate) => fromCur == 'EUR' ? 1/rate : rate

    _onToSelected = () => this.showCurrencies('to')

    _onFromSelected = () => this.showCurrencies('from')

    _onCurrencySelected = ({ currency, rate }, loc) => {
      let fromCur, toCur
      if(loc == 'to'){
        toCur = currency
        fromCur = 'EUR'
      }else {
        toCur = 'EUR'
        fromCur = currency
      }
      this.props.saveConversion({ KEY: `${fromCur}TO${toCur}`, RATE: rate, DATE: new Date() })
      this.setState({ fromCur, toCur, rate: this.getRate(fromCur, rate) })
    }

    _onNumberUpdated = (text) => {
      const { rate } = this.state
      this.setState({ input: text, result: (text * rate) })
    }

    _onConversionSelected = ({ fromCur, toCur }) => {
        const { input } = this.state
        let rate

        if(fromCur == 'EUR') {
            rate = 1 / this.findRate(toCur)
        }else {
            rate = this.findRate(fromCur)
        }

        this.setState({ fromCur, toCur, rate, result: (input * rate) })
    }

    _onHistoryPressed = () => {
        this.props.navigator.push({
          screen: 'history',
          passProps: { history: this.props.history.conversions, onConversionSelected: this._onConversionSelected },
        })
    }

    render() {
        const { fromCur, toCur, result } = this.state
        return (
                <View style={[styles.container, styles.centering]}>
                    <View style={[styles.row, styles.section]}>
                        <TouchableOpacity onPress={this._onHistoryPressed}>
                            <Text style={styles.historyLabel}>Show History</Text>
                        </TouchableOpacity>
                    </View>
                  <View style={styles.contentContainer} >
                    <View style={[styles.row, styles.section]}>
                      <TouchableOpacity style={styles.labelContainer} onPress={this._onFromSelected}>
                        <View style={styles.row}>
                          <Text style={styles.label}>FROM</Text>
                          <Text style={styles.currency}>{fromCur}</Text>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.inputContainer}>
                        <InputBox onChangeText={this._onNumberUpdated} />
                      </View>
                    </View>

                    <View style={[styles.row, styles.section]}>
                      <TouchableOpacity style={styles.labelContainer} onPress={this._onToSelected}>
                        <View style={styles.row}>
                          <Text style={styles.label}>TO</Text>
                          <Text style={styles.currency}>{toCur}</Text>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.inputContainer}>
                        <Text style={styles.resultText}>{result}</Text>
                      </View>
                    </View>

                  </View>
                </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rates: state.converter.rates,
        history: state.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRates: () => dispatch(ConvertActions.getRates()),
        saveConversion: (data) => dispatch(HistoryActions.saveConversion(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
