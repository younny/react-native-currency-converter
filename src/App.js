import React from 'react'
import { Provider } from 'react-redux'
import { Navigation } from 'react-native-navigation'

import registerScreens from './containers'
import store from './store'

registerScreens(store, Provider)

// Navigation.events().onAppLaunched(() => {
//     console.log('App Launched')
//     // Navigation.setRoot({
//     //     component: { name: 'home' }
//     // })
// })
