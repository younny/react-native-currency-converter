import { StyleSheet } from 'react-native'
import { AppStyles, Fonts, Metrics, Colors } from '../../themes'

export default StyleSheet.create({
    ...AppStyles.screen,
    ...AppStyles.layout,
    contentContainer: {
      backgroundColor: 'white'
    },
    rateItem: {
      height: 40,
      padding: 10
    },
    rateItemText: {
      fontSize: Fonts.size.h2
    }

})
