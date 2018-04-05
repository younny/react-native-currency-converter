// @flow
import * as React from 'react'
import {
    View,
    Text
} from 'react-native'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'

import styles from './style'

type Props = {
    setupCompleted: bool,
    componentId: string
};

class SplashScreen extends React.Component<Props> {

  componentWillReceiveProps(nextProps: Props) {
    if(nextProps.setupCompleted){
        Navigation.setRoot({
            component: { name: 'home' },
            options: {
              animated: true // Will animate root change same as push
            }
        })
    }
  }

  render(){
    return (
        <View style={styles.container}>
            <View style={[styles.contentContainer, styles.centering]}>
                <Text style={styles.title}>Currency Converter</Text>
            </View>
        </View>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        setupCompleted: state.startup.setupCompleted
    }
}

export default connect(mapStateToProps)(SplashScreen)
