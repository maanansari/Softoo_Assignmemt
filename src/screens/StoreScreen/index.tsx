import React from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';
import {StoreItems} from '../../components/StoreItem';
import {ProductsProps} from '../../model/StoreItemModel';
import {useReduxSelector} from '../../redux';
import {styles} from './style';

export interface StoreScreenProps {
  navigation: NavigationScreenProp<NavigationParams, any>;
}

const Store: React.FC<StoreScreenProps> = ({navigation}) => {
  const val = useReduxSelector(sel => sel.cart);
  return (
    <View style={{flex: 1}}>
      <Pressable testID="back-btn" onPress={() => navigation.goBack()} style={styles.iconContainerStyle}>
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
        renderItem={({item}) => <StoreItems products={item?.products} />}
        keyExtractor={({products}: ProductsProps) => products?.id?.toString()}
      />
    </View>
  );
};

export default Store;
