import {increaseItemQuantity, decreaseItemQuantity, removeFromCart} from '../src/redux/cartReducer';
import store from '../src/redux';

describe('test redux', () => {
  const mockActionState = {
    id: 1,
    name: '',
    price: 10,
    img: '',
  };
  it('increase items', () => {
    store.dispatch(increaseItemQuantity({mockActionState}));
    const state = store.getState();
    expect(state).toEqual({
      cart: [{products: {id: undefined, img: undefined, name: undefined, price: undefined, quantity: 1}}],
    });
  });

  it('should add a new item to the state if it does not exist', () => {
    const initialState = [];
    const action = {
      type: 'increaseItemQuantity',
      payload: {
        id: 1,
        name: 'Product 1',
        price: 10,
        img: 'product1.jpg',
      },
    };

    const newState = increaseItemQuantity(initialState, action);
    expect(newState.type).toBe('cart/increaseItemQuantity');
    expect(newState.payload).toEqual([]);
  });
});
