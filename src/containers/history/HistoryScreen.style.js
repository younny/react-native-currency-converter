import { StyleSheet } from 'react-native'
import { AppStyles, Fonts } from '../../themes'

export default StyleSheet.create({
    ...AppStyles.screen,
    ...AppStyles.layout,
    historyItem: {

    },
    dataRow: {
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: Fonts.size.h2
    },
    rateItemText: {
        fontSize: Fonts.size.h3
    }
})
