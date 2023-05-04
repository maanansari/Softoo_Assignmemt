import React from 'react';
import {FlatList, Image, StyleSheet, Text, View, Pressable} from 'react-native';
import {StoreItems} from '../../components/StoreItem';
import {CartItem} from '../../model/CartItemModel';
import {useReduxSelector} from '../../redux';

const Store = (props: any) => {
  const val = useReduxSelector(sel => sel.cart);
  return (
    <View style={{flex: 1}}>
      <Pressable testID="back-btn" onPress={() => props.navigation.goBack()} style={styles.iconContainerStyle}>
        <Image testID="go-icon" source={require('../../assets/goback.png')} style={styles.backIconStyle} />
      </Pressable>
      <FlatList
        contentContainerStyle={{paddingVertical: 20}}
        testID="store-list"
        data={val}
        numColumns={2}
        ListEmptyComponent={() => {
          return (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyTextStyle}>No Item in Cart</Text>
            </View>
          );
        }}
        keyExtractor={(item: CartItem) => item.id.toString()}
        renderItem={({item}) => <StoreItems key={item.id} id={item.id} price={item?.price} name={item?.name} img={item?.img} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTextStyle: {
    color: '#000',
    fontSize: 14,
  },

  backIconStyle: {width: '10%', height: '100%'},

  iconContainerStyle: {
    marginStart: 8,
    height: 35,
    marginTop: 2,
  },
});
export default Store;
