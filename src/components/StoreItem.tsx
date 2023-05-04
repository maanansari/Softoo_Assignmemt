import {Image, StyleSheet, Text, View} from 'react-native';
import {StoreItemsProps} from '../model/StoreItemModel';
import {decreaseItemQuantity, increaseItemQuantity, removeFromCart} from '../redux/cartReducer';
import {useReduxDispatch, useReduxSelector} from '../redux/index';
import Button from './Button';

export function StoreItems({id, name, price, img}: StoreItemsProps) {
  const dispatch = useReduxDispatch();
  const val = useReduxSelector(sel => sel.cart);
  const quantity = val.find(item => item.id == id)?.quantity;

  return (
    <View style={{flex: 0.5}}>
      <Image source={{uri: img}} style={style.storeImageStyle} resizeMode={'contain'} />
      <View style={style.mainContainer}>
        <Text style={style.textContainer} numberOfLines={1}>
          {name}
        </Text>
        <Text style={{...style.textContainer, ...style.priceTextStyle}}>{'$' + price}</Text>
      </View>
      {quantity == 0 || quantity == undefined ? (
        <Button title="Add to cart" onPress={() => dispatch(increaseItemQuantity({id, name, price, img}))} />
      ) : (
        <View style={style.removeCartContainer}>
          <View style={style.actionLayoutStyle}>
            <Button title="+" onPress={() => dispatch(increaseItemQuantity({id, name, price, img}))} />
            <Text style={{fontSize: 16.5, marginHorizontal: 8}}>{`${quantity} in cart`}</Text>
            <Button title="-" onPress={() => dispatch(decreaseItemQuantity({id, name, price, img}))} />
          </View>
          <Button
            title="Remove from cart"
            onPress={() =>
              dispatch(
                removeFromCart({
                  id,
                  name,
                  price,
                  img,
                }),
              )
            }
          />
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
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
});
