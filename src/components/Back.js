import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Back = (props) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <TouchableOpacity onPress={() => props.onPress()} style={{ padding: 10 }}>
        <Image
          source={require('../assets/icons/back.png')}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
      <Text style={{ flex: 1, marginLeft: 10, alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>
        {props.children}
      </Text>
    </View>
  );
};

export default Back;
