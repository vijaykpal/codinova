import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {NoEmployee} from './src/screens/NoEmployee';
import AddEmpForm from './src/screens/AddEmpForm';
import EmployeeList from './src/screens/EmployeeList';

const AppNavigator = createStackNavigator(
  {
    NoEmployee: NoEmployee,
    AddEmpForm: AddEmpForm,
    EmployeeList: EmployeeList
  },
  {
    initialRouteName: 'NoEmployee',
  }
);

export default createAppContainer(AppNavigator);

