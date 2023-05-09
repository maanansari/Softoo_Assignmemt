import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {style} from './style';

type Props = {
  title: string;
  onPress: () => void;
};

const Button: React.FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity testID="btnContainer" onPress={onPress} style={style.buttonStyle}>
      <Text testID="btnText" style={style.buttonTextStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
