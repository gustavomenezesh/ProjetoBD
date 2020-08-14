import { createReducer } from '@reduxjs/toolkit';
import { updateAdress } from './actions';
 
const adress = createReducer([], {
 [updateAdress]: (state, action) => {
   const { payload } = action;
   const { adress } = payload;
  
   state.adress = adress;

 },

})

export default adress;