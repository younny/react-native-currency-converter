import { Dimensions, Platform, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')

export default {
    screenWidth: width,
    screenHeight: height,
    sectionHeight: 60,
    pd: {
        base: 10,
        double: 20
    }
}
