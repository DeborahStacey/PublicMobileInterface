import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import SignUp from '../Containers/SignUp'

import SignIn from '../Containers/SignIn'
import AddCat from '../Containers/AddCat'
import AccountInfo from '../Containers/AccountInfo'
import CatInfo from '../Containers/CatInfo'
import CatList from '../Containers/CatList'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='presentationScreen' component={PresentationScreen} title='WellCat' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='signUp' component={SignUp} title='Sign-Up' />
            <Scene initial key='signIn' component={SignIn} title='WellCat' />
            <Scene key='addCat' component={AddCat} title='Add Cat' />
            <Scene key='accountInfo' component={AccountInfo} title='Account Info' />
            <Scene key='catInfo' component={CatInfo} title='Cat Info' />
            <Scene key='catList' component={CatList} title='Cat List' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
