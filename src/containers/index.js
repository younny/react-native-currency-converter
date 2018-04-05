import React from 'react'

import { Navigation } from 'react-native-navigation'

import HomeScreen from './home/HomeScreen'
import HistoryScreen from './history/HistoryScreen'
import RatesScreen from './rates/RatesScreen'

// const sceneCreator = (sceneComp, store) => {
//       return class Wrapper extends React.Component {
//         render() {
//           return (
//             <Provider store={store}>{React.createElement(sceneComp)}</Provider>
//           )
//         }
//       }

//   }
export default (store, provider) => {
    //Navigation.registerComponent('splash', () => sceneCreator(SplashScreen, store)),
    Navigation.registerComponent('home', () => HomeScreen, store, provider),
    Navigation.registerComponent('history', () => HistoryScreen),
    Navigation.registerComponent('rates', () => RatesScreen)
}
