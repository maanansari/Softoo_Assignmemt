import Store from '../src/screens/StoreScreen';
import {fireEvent, render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../src/redux/rootReducer';

describe('render store', () => {
  let store = configureStore({
    reducer: rootReducer,
  });

  let navigation = {
    goBack: jest.fn(),
  };
  let component = (
    <Provider store={store}>
      <Store navigation={navigation} />
    </Provider>
  );

  it('match snap', () => {
    const tree = render(component);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('render children', async () => {
    const tree = render(component);
    const backBtn = await tree.findByTestId('back-btn');
    fireEvent.press(backBtn);
    expect(navigation.goBack).toBeCalled();
    expect(backBtn).toBeDefined();
  });

  it('render back icon', async () => {
    const tree = render(component);
    const backBtn = await tree.findByTestId('go-icon');
    expect(backBtn.props.source.testUri).toBe('../../../src/assets/goback.png');
  });

  it('render flatList', async () => {
    const tree = render(component);
    const flatList = await tree.findByTestId('store-list');
  });
});
