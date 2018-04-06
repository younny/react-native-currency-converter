import { StyleSheet } from 'react-native'
import { AppStyles, Fonts, Metrics, Colors } from '../../themes'

export default StyleSheet.create({
    ...AppStyles.screen,
    ...AppStyles.layout,
    contentContainer: {
      width: '90%',
      backgroundColor: 'white'
    },
    buttonContainer: {
      width: '90%',
      justifyContent: 'space-between'
    },
    labelContainer: {
      flex: 0.4,
      marginRight: Metrics.pd.double
    },
    inputContainer: {
      flex: 0.6,
    },
    label: {
      flex: 0.4,
      fontSize: Fonts.size.medium
    },
    historyLabel: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    resultText: {
      width: '90%',
      fontSize: Fonts.size.h3
    },
    currency: {
      flex: 0.6,
      fontSize: Fonts.size.h2,
      marginLeft: Metrics.pd.base,
      fontWeight: 'bold'
    }
})
