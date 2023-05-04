import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};
const Button = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={styles.buttonStyle}>
      <Text style={styles.buttonTextStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 7,
    marginVertical: 2,
    marginHorizontal: 4,
    backgroundColor: '#0F52BA',
  },
  buttonTextStyle: {
    color: '#FFF',
    fontSize: 17,
  },
});
export default Button;
