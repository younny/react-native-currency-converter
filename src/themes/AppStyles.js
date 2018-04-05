import Fonts from './Fonts'
import Colors from './Colors'
import Metrics from './Metrics'

export default {
    nav: {
        statusBarColor: 'black',
        statusBarTextColorScheme: 'light',
        navBarTextColor: 'white',
        navBarButtonColor: 'white',
        tabBarButtonColor: 'red',
        tabBarSelectedButtonColor: 'red',
        tabBarBackgroundColor: 'white',
        showTitleWhenExpended: true,
        navBarSubtitleColor: 'red',
        navBarHideOnScroll: true,
    },
    screen: {
        container: {
            backgroundColor: Colors.bg,
            flex: 1,
            padding: Metrics.pd.base
        }
    },
    component: {

    },
    layout: {
        centering: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        section: {
            height: Metrics.sectionHeight,
            padding: Metrics.pd.base,
        },
        row: {
          flexDirection: 'row',
          alignItems: 'center'
        }
    },
    font: {
        basic: {
            fontSize: Fonts.size.basic,
            color: Colors.font.basic
        },
        error: {
            fontSize: Fonts.size.basic,
            color: Colors.font.error
        }
    }
}
