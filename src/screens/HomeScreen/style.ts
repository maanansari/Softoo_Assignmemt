import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginEnd: 10,
  },
  cartText: {
    color: '#FFF',
    marginEnd: 12,
  },
  cartCountText: {
    borderRadius: 20,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#FFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginBottom: 10,
    color: '#000',
  },
});
