import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps170848Navigator from '../features/Maps170848/navigator';
import Additem170847Navigator from '../features/Additem170847/navigator';
import Maps170843Navigator from '../features/Maps170843/navigator';
import UserProfile170839Navigator from '../features/UserProfile170839/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps170848: { screen: Maps170848Navigator },
Additem170847: { screen: Additem170847Navigator },
Maps170843: { screen: Maps170843Navigator },
UserProfile170839: { screen: UserProfile170839Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
