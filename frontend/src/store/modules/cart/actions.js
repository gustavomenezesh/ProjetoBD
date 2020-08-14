import { createAction } from '@reduxjs/toolkit';
 
export const addToCart = createAction('cart/add_food');
export const removeFromCart = createAction('cart/remove_food');
export const updateAmount = createAction('cart/update_count');
export const clearCart = createAction('cart/clear_cart');