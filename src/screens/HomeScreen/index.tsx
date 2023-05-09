import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';
import {StoreItems} from '../../components/StoreItem';
import {PRODUCT_LIST_END_POINT} from '../../constants/constants';
import {ProductsProps} from '../../model/StoreItemModel';
import {useReduxSelector} from '../../redux';
import {AppService} from '../../service/app.service';
import {styles} from './style';

export interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationParams, any>;
}

const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  const val = useReduxSelector(sel => sel.cart);

  let sum = 0;
  val.map(item => {
    sum = sum + item?.products?.quantity;
  });

  const appService = new AppService();
  const [noData, setNoData] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

  const getProducts = () => {
    appService
      .getProducts(PRODUCT_LIST_END_POINT)
      .then(val => {
        setShoppingList(val);
      })
      .catch(err => {
        setShoppingList([]);
        setNoData('No Data Found');
        Alert.alert('Something went wrong');
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View testID="listContainer" style={{flex: 1}}>
      {shoppingList.length > 0 ? (
        <>
          <TouchableOpacity
            testID="store-btn"
            onPress={() => {
              navigation.navigate('Store');
            }}>
            <View style={styles.mainContainer}>
              <Text style={styles.cartText}>Cart</Text>
              <View style={styles.cartCountText}>
                <Text testID="sumText" style={{color: '#000'}}>
                  {sum.toString()}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <FlatList
            numColumns={2}
            contentContainerStyle={{paddingVertical: 20}}
            data={shoppingList}
            renderItem={({item}) => <StoreItems products={item} />}
            keyExtractor={item => item?.id?.toString()}
          />
        </>
      ) : (
        <View testID="loadingContainer" style={styles.loadingContainer}>
          <Text style={styles.loadingText}>{noData === '' ? 'Loading Data ...' : noData}</Text>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </View>
  );
};

export default Home;
