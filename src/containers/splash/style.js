import { StyleSheet } from 'react-native'
import { AppStyles, Fonts } from '../../themes'

export default StyleSheet.create({
    ...AppStyles.screen,
    ...AppStyles.layout,
    title: {
        fontSize: Fonts.size.h2
    },
    contentContainer: {
        flex: 1
    }

})
