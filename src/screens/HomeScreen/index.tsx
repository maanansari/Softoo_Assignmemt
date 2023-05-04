import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StoreItems} from '../../components/StoreItem';
import {PRODUCT_LIST_END_POINTS} from '../../constants/constants';
import {CartItem} from '../../model/CartItemModel';
import {useReduxSelector} from '../../redux';
import {AppService} from '../../service/app.service';

const Home = (props: any) => {
  const val = useReduxSelector(sel => sel.cart);
  let sum = 0;
  val.map(item => {
    sum = sum + item.quantity;
  });

  const appService = new AppService();
  const [shoppingList, setShoppingList] = useState();

  const getProducts = async () => {
    const products = await appService.getProducts(PRODUCT_LIST_END_POINTS);
    setShoppingList(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View testID="listContainer" style={{flex: 1}}>
      {shoppingList ? (
        <>
          <TouchableOpacity
            testID="store-btn"
            onPress={() => {
              props.navigation.navigate('Store');
            }}>
            <View style={styles.mainContainer}>
              <Text style={styles.cartText}>Cart</Text>
              <View style={styles.cartCountText}>
                <Text style={{color: '#000'}}>{sum.toString()}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <FlatList
            numColumns={2}
            contentContainerStyle={{paddingVertical: 20}}
            data={shoppingList}
            renderItem={({item}) => <StoreItems id={item.id} price={item.price} name={item.name} img={item?.img} />}
            keyExtractor={(item: CartItem) => item.id.toString()}
          />
        </>
      ) : (
        <View testID="loadingContainer" style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading Data ... </Text>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
export default Home;
