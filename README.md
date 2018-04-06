### react-native-currency-converter

* Features
    - Calculation of currency agains to Euro
    - History of conversions that user made previously.
    - Reusability of conversion set from history.

* Integrated with...
    - React Native Navigation
    - Redux Persist
    - Immutable Data
    - Axios

* Transformer and Reconciler for immutable data is imported from (https://www.npmjs.com/package/redux-persist-seamless-immutable)

 -------------   

* Installation

    npm install
    react-native link react-native-navigation

Set up Api base url to ApiConfig

e.g
  export default {
    baseUrl: 'https://api.github.com'
  }

-------------

Run the app

iOS

    react-native run-ios    
    react-native run-ios --device "[YOUR_DEVICE_NAME]"

or manually open Xcode, and run on designated device.

Android (Should connected emulator or device is running)

    react-native run-android
