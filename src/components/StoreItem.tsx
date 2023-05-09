import {Image, Text, View} from 'react-native';
import {useDecrement, useIncrement, useRemove} from '../hooks/useHooks';
import {useReduxDispatch, useReduxSelector} from '../redux/index';
import Button from './Button';
import {style} from './style';

export function StoreItems({products}: any) {
  const {id, name, price, img} = products;
  const dispatch = useReduxDispatch();
  const val = useReduxSelector(sel => sel.cart);
  const quantity = val.find(item => item?.products.id == id)?.products?.quantity || 0;

  const handleIncreaseQuantity = () => {
    dispatch(useIncrement(products));
  };

  const handleDecreaseQuantity = () => {
    dispatch(useDecrement(products));
  };

  const handleRemoveFromCart = () => {
    dispatch(useRemove(products));
  };

  return (
    <View style={{flex: 0.5}}>
      <Image source={{uri: img}} style={style.storeImageStyle} resizeMode="contain" />
      <View style={style.mainContainer}>
        <Text style={style.textContainer} numberOfLines={1}>
          {name}
        </Text>
        <Text style={[style.textContainer, style.priceTextStyle]}>${price}</Text>
      </View>
      {quantity === 0 || quantity === undefined ? (
        <Button title="Add to cart" onPress={handleIncreaseQuantity} />
      ) : (
        <View style={style.removeCartContainer}>
          <View style={style.actionLayoutStyle}>
            <Button title="+" onPress={handleIncreaseQuantity} />
            <Text testID="quantityText" style={style.countTextStyle}>{`${quantity} in cart`}</Text>
            <Button title="-" onPress={handleDecreaseQuantity} />
          </View>
          <Button title="Remove from cart" onPress={handleRemoveFromCart} />
        </View>
      )}
    </View>
  );
}
