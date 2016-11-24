import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      marginTop: Metrics.navBarHeight,
      backgroundColor: Colors.background
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    profileImage: {
      width: 126,
      height: 126,
      borderRadius: 63
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin
    },
    centered: {
      alignItems: 'center'
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin,
      borderTopColor: Colors.frost,
      borderTopWidth: 0.5,
      borderBottomColor: Colors.frost,
      borderBottomWidth: 1
    },
    sectionText: {
      color: Colors.mainText,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    infoTitleText: {
      color: Colors.mainText,
      marginVertical: Metrics.smallMargin,
      textAlign: 'left',
      fontWeight: 'bold',
      fontSize: 24
    },
    infoText: {
      color: Colors.mainText,
      marginVertical: Metrics.smallMargin,
      textAlign: 'left',
      fontSize: 18
    },
    sectionInput: {
      color: Colors.mainText,
      marginVertical: Metrics.smallMargin,
      fontWeight: 'bold',
      fontSize: 14,
      height: 50
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    }
  },
  darkLabelContainer: {
    backgroundColor: Colors.cloud,
    padding: Metrics.smallMargin
  },
  darkLabel: {
    fontFamily: Fonts.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.silver,
    alignItems: 'center',
    textAlign: 'center'
  }
}

export default ApplicationStyles
