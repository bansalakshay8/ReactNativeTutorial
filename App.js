import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Screen1 from './src/components/RNSA';
import Screen2 from './src/components/RNSB';
import Screen3 from './src/components/RNSC';

const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    screen: Screen1,
  },
  Screen2: {
    screen: Screen2,
  },
  Screen3: {
    screen: Screen3,
    navigationOptions:{
      title:'Tab Navigation'
    }
  },
});

export default createAppContainer(DrawerNavigatorExample);
