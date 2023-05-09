import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: '#0F52BA',
    paddingVertical: 2,
    marginHorizontal: 4,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  textContainer: {
    flex: 0.75,
    color: '#FFF',
    fontWeight: '500',
    fontSize: 17,
  },
  priceTextStyle: {
    fontSize: 15.5,
    flex: 0.25,
    textAlign: 'right',
  },
  storeImageStyle: {
    width: 400,
    height: 400,
    alignSelf: 'center',
  },
  removeCartContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
  },
  actionLayoutStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  countTextStyle: {
    fontSize: 16.5,
    marginHorizontal: 8,
  },
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
