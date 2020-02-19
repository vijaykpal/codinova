import {createStore} from 'redux';
import {employeeReducer} from './employeeReducer';

export const store = createStore(employeeReducer);