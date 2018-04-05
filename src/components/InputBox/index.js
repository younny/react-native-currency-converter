// @flow
import * as React from 'react'

import {
  View,
  TextInput
} from 'react-native'

import styles from './style'

type Props = {
  onChangeText: Function
}

const InputBox = (props: Props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        keyboardType={'numeric'}
        onChangeText={props.onChangeText} />
    </View>
  )
}
export default InputBox
