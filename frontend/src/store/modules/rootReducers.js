import { combineReducers } from 'redux';
 
import cart from './cart/reducer';
import adress from './adress/reducer';
 
export default combineReducers({
   cart,
   adress,
});