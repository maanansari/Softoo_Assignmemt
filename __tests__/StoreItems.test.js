import {configureStore} from '@reduxjs/toolkit';
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {StoreItems} from '../src/components/StoreItem';
import rootReducer from '../src/redux/rootReducer';

describe('StoreItems', () => {
  let store = configureStore({
    reducer: rootReducer,
  });

  const products = {
    id: 1,
    name: 'Product 1',
    price: 10,
    img: 'https://example.com/product1.jpg',
  };

  let storeComponent = (
    <Provider store={store}>
      <StoreItems products={products} />
    </Provider>
  );

  it('match snapshot', () => {
    const {toJSON} = render(storeComponent);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly and handles actions', async () => {
    const {findByText} = render(storeComponent);
    const addToCartButton = await findByText('Add to cart');
    expect(addToCartButton).toBeDefined();
    fireEvent.press(addToCartButton);
    expect(await findByText('-')).toBeDefined();
    expect(await findByText('+')).toBeDefined();
    expect(await findByText('Remove from cart')).toBeDefined();
  });

  it('renders correctly and handles actions', async () => {
    const {findByTestId} = render(storeComponent);
    const quantityText = await findByTestId('quantityText');
    expect(quantityText.props.children).toContain('1 in cart');
  });
});
