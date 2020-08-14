
import { createReducer } from '@reduxjs/toolkit';
import { addToCart, removeFromCart, updateAmount, clearCart, setrestId} from './actions';
 
const cart = createReducer([], {
 [addToCart]: (state, action) => {
   const { payload } = action;
   const { food } = payload;
  
   const bookExists = state.find(plate => plate.food === food);
  
   if (bookExists) {
     bookExists.amount = bookExists.amount + 1;
   } else {
     payload.amount = 1;
     state.push(payload);
   }
 },
 [removeFromCart]: (state, action) => {
   const productIndex = state.findIndex(plate => plate.food === action.payload.id);
 
   if (productIndex >= 0) {
     state.splice(productIndex, 1);
   }
 },
 [clearCart]: (state, action) => {

   action.payload.map(pedido => {
    const productIndex = state.findIndex(plate => plate.food === pedido.id);
 
    if (productIndex >= 0) {
      state.splice(productIndex, 1);
    }
   })
  
 },
 [updateAmount]: (state, action) => {
   const { food, qnt } = action.payload;
   const bookExists = state.find(plate => plate.food === food);
 
   if (bookExists) {
     console.log(action.payload)
     const bookIndex = state.findIndex(plate => plate.food === bookExists.food);
 
     if (bookIndex >= 0 && qnt >= 1) {
       state[bookIndex].qnt = Number(qnt);
     }
   }

   return state;
 },
});
 
export default cart