import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import Back from '../components/Back';
import CardSmall from '../components/CardSmall';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const WishList = () => {
  const wishlist = useSelector((state) => state.wish.data);
  const navigate = useNavigation();
  return (
    <View className='w-5/6 mx-auto my-10'>
      <Back onPress={() => navigate.goBack()}>Wishlist</Back>
      <ScrollView>
        {wishlist &&
          wishlist.map((item) => <CardSmall key={item.id} item={item} />)}
      </ScrollView>
    </View>
  );
};

export default WishList;