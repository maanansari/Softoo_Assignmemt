import {configureStore} from '@reduxjs/toolkit';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import rootReducer from '../src/redux/rootReducer';
import Home from '../src/screens/HomeScreen';

let data = [
  {
    id: 1,
    name: 'some name',
    color: 'color',
    price: 10,
    img: '',
  },
];

global.fetch = jest.fn();
const mockFetchUserData = data => {
  return (global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => data,
    }),
  ));
};

const navigation = {
  navigate: jest.fn(),
};
describe('render home screen', () => {
  let store = configureStore({
    reducer: rootReducer,
  });
  let component = (
    <Provider store={store}>
      <Home navigation={navigation} />
    </Provider>
  );

  it('match snap', async () => {
    await mockFetchUserData(data);
    const tree = render(component);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('check render for component', async () => {
    await mockFetchUserData(data);
    const tree = render(component);
    const listContainer = tree.findByTestId('listContainer');
    expect(listContainer).toBeDefined();
    expect((await listContainer).props.children.props.children).toHaveLength(2);
    console.log((await listContainer).props);
  });

  it('check loader component', async () => {
    await mockFetchUserData(data);
    const tree = render(component);
    const loadingContainer = tree.findByTestId('loadingContainer');
    expect(loadingContainer).toBeDefined();
  });

  it('check navigate', async () => {
    const tree = render(component);
    const pressable = await tree.findByTestId('store-btn');
    fireEvent.press(pressable);
    expect(navigation.navigate).toBeCalledWith('Store');
  });
});
