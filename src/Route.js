import {Dimensions} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {NoEmployee} from './screens/NoEmployee';
import AddEmpForm from './screens/AddEmpForm';
import EmployeeList from './screens/EmployeeList';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SideMenu from './drawer/SideMenu';

const AppNavigator = createStackNavigator(
    {
      NoEmployee: {
        screen: NoEmployee,
        navigationOptions: {
          headerShown: false
        }
      },
      AddEmpForm: {
        screen: AddEmpForm,
        navigationOptions: {
          headerShown: false
        }
      },
      EmployeeList: {
        screen: EmployeeList,
        navigationOptions: {
          headerShown: false
        }
      }
    },
    {
      initialRouteName: 'NoEmployee',
    }
  );
  
  const AppDrawer = createDrawerNavigator(
    {
      drawer: AppNavigator
    }, 
    {
      contentComponent: SideMenu,
      drawerWidth: Dimensions.get('window').width * 3/4
    }
  )
  
  export default createAppContainer(AppDrawer);