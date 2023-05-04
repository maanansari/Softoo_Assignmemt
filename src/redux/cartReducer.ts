import {createSlice} from '@reduxjs/toolkit';
import {CartItem} from '../model/CartItemModel';

const cartSlice = createSlice({
  name: 'cart',
  initialState: <CartItem[]>[],

  reducers: {
    increaseItemQuantity: (state, action) => {
      if (state.find(item => item.id == action.payload.id) == null) {
        return [...state, {id: action.payload.id, quantity: 1, price: action.payload.price, name: action.payload.name, img: action.payload.img}];
      } else {
        return state.map(item => {
          if (item.id == action.payload.id) {
            return {...item, quantity: item.quantity + 1};
          } else {
            return item;
          }
        });
      }
    },

    decreaseItemQuantity: (state, action) => {
      if (state.find(item => item.id == action.payload.id)?.quantity == 1) {
        return state.filter(item => item.id != action.payload.id);
      } else {
        return state.map(item => {
          if (item.id == action.payload.id) {
            return {...item, quantity: item.quantity - 1};
          } else {
            return item;
          }
        });
      }
    },

    removeFromCart: (state, action) => {
      return state.filter(item => item.id != action.payload.id);
    },
  },
});

export const {increaseItemQuantity, decreaseItemQuantity, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
