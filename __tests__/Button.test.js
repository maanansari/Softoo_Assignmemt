import Button from '../src/components/Button';
import {fireEvent, render} from '@testing-library/react-native';

const props = {
  onPress: jest.fn(),
  title: '',
};

describe('Button', () => {
  let props = {
    title: 'Submit',
    onPress: jest.fn(),
  };

  it('match snap', () => {
    const {toJSON} = render(<Button {...props} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('match snap', () => {
    const {getByTestId} = render(<Button {...props} />);
    const buttonContainer = getByTestId('btnContainer');
    const buttonText = getByTestId('btnText');
    expect(buttonContainer).toBeDefined();
    expect(buttonText).toBeDefined();
    expect(buttonText.props.children).toBe(props.title);

    fireEvent.press(buttonContainer);
    expect(props.onPress).toHaveBeenCalled();
  });
});
