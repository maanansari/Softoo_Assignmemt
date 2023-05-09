import {createSlice} from '@reduxjs/toolkit';
import {ProductsProps} from '../model/StoreItemModel';

const cartSlice = createSlice({
  name: 'cart',
  initialState: <ProductsProps[]>[],

  reducers: {
    increaseItemQuantity: (state, action) => {
      if (state.find(item => item?.products.id == action.payload?.id) == null) {
        return [...state, {products: {id: action?.payload?.id, quantity: 1, price: action?.payload?.price, name: action?.payload?.name, img: action?.payload?.img}}];
      } else {
        return state.map(item => {
          if (item?.products?.id == action?.payload?.id) {
            return {
              ...item,
              products: {...item?.products, quantity: item?.products.quantity + 1},
            };
          } else {
            return item;
          }
        });
      }
    },

    decreaseItemQuantity: (state, action) => {
      if (state.find(item => item?.products?.id == action.payload?.id)?.products.quantity == 1) {
        return state.filter(item => item?.products?.id != action.payload?.id);
      } else {
        return state.map(item => {
          if (item?.products?.id == action.payload?.id) {
            return {
              ...item,
              products: {...item?.products, quantity: item?.products.quantity - 1},
            };
          } else {
            return item;
          }
        });
      }
    },

    removeFromCart: (state, action) => {
      return state.filter(item => item?.products?.id != action.payload.id);
    },
  },
});

export const {increaseItemQuantity, decreaseItemQuantity, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
