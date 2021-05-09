import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigator'
import {customSideBarMenu} from './customSideBarmenu'
import SettingsScreen from '../screens /settingsScreen'
import myrecievedBookScreen from '../screens /myrecievedBookScreen'
import NotificationScreen from '../screens /NotificationsScreen'
import {Icon} from 'react-native-elements'
import MyDonationScreen from '../screens /MyDonationScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator,
        navigationOptions:{
            drawerIcon:<Icon name = 'home' type = 'fontawesome'/>
        }
    },
    myDonation:{
        screen:MyDonationScreen,
        navigationOptions:{
            drawerIcon:<Icon name = 'gift' type = 'fontawesome'/>,
            drawerLabel:'MyDonation'
        }
    },
    Notification:{
        screen:NotificationScreen,
        navigationOptions:{
            drawerIcon:<Icon name = 'bell' type = 'fontawesome'/>,
            drawerLabel:'Notification'
        }
    },
    myrecievedBookScreen:{
        screen:myrecievedBookScreen,
        navigationOptions:{
            drawerIcon:<Icon name = 'gift' type = 'fontawesome'/>,
            drawerLabel:'MyRecievedBooks'
        }

    },
    settings:{
        screen:SettingsScreen,
        navigationOptions:{
            drawerIcon:<Icon name = 'settings' type = 'fontawesome'/>,
            drawerLabel:'Settings'
        }
        
    }
},
{
    contentComponent:customSideBarMenu
},
{intialRouteName:'Home'


})