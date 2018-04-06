import { StyleSheet } from 'react-native'
import { AppStyles, Fonts, Metrics } from '../../themes'

export default StyleSheet.create({
  ...AppStyles.screen,
  ...AppStyles.layout,
  historyItem: {
    padding: Metrics.pd.base
  },
  headerText: {
    fontSize: Fonts.size.h2
  },
  dateText: {
    fontSize: Fonts.size.small
  },
  rateItemText: {
    fontSize: Fonts.size.h3
  }
})
