import {decreaseItemQuantity, increaseItemQuantity, removeFromCart} from '../redux/cartReducer';

export const useIncrement = (products: any) => {
  return (dispatch: any) => {
    dispatch(increaseItemQuantity(products));
  };
};

export const useDecrement = (products: any) => {
  return (dispatch: any) => {
    dispatch(decreaseItemQuantity(products));
  };
};

export const useRemove = (products: any) => {
  return (dispatch: any) => {
    dispatch(removeFromCart(products));
  };
};
