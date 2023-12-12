import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  TextInput,
} from 'react-native';
import Button from '../components/Button';
import Back from '../components/Back';
import { useNavigation } from '@react-navigation/native';
import { logOut, updateProfile } from '../redux/accSlice';

const Settings = () => {
  const navigate = useNavigation();
  const profileDataIndex = useSelector((state) => state.acc.whoIsLogin);
  const profileData = useSelector(
    (state) => state.acc.account[profileDataIndex]
  );
  const [name, setName] = useState(profileData.name);
  const [noHp, setNoHp] = useState(profileData.noHp);
  const [email, setEmail] = useState(profileData.email);
  const [gender, setGender] = useState(profileData.gender);
  const dispatch = useDispatch();

  const updateProfileHandle = () => {
    dispatch(updateProfile({ name, email, noHp, gender }));

    if (Platform.OS === 'android') {
      ToastAndroid.show('Profile updated successfully!', ToastAndroid.SHORT);
    } else {
      Alert.alert('Success', 'Profile updated successfully!');
    }
  };

  const logout = () => {
    dispatch(logOut());
    navigate.navigate('Login');
  };

  return (
    <ScrollView style={{ backgroundColor: '#f4f4f4',padding: 16 }}>
      <Back onPress={() => navigate.goBack()}>Settings</Back>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 16 }}>
          My Account
        </Text>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontWeight: 'bold', color: '#555', marginBottom: 8 }}>Name</Text>
          <TextInput
            onChangeText={setName}
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              marginBottom: 12,
              paddingVertical: 8,
              paddingHorizontal: 12,
              backgroundColor: 'white',
              borderRadius: 8,
            }}
            value={name}
          />
          <Text style={{ fontWeight: 'bold', color: '#555', marginBottom: 8 }}>Email</Text>
          <TextInput
            onChangeText={setEmail}
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              marginBottom: 12,
              paddingVertical: 8,
              paddingHorizontal: 12,
              backgroundColor: 'white',
              borderRadius: 8,
            }}
            value={email}
          />
          <Text style={{ fontWeight: 'bold', color: '#555', marginBottom: 8 }}>No Handphone</Text>
          <TextInput
            onChangeText={setNoHp}
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              marginBottom: 12,
              paddingVertical: 8,
              paddingHorizontal: 12,
              backgroundColor: 'white',
              borderRadius: 8,
            }}
            value={noHp}
          />
          <Text style={{ fontWeight: 'bold', color: '#555', marginBottom: 8 }}>Gender</Text>
          <TextInput
            onChangeText={setGender}
            style={{
              borderWidth: 1,
              borderColor: '#ddd',
              marginBottom: 16,
              paddingVertical: 8,
              paddingHorizontal: 12,
              backgroundColor: 'white',
              borderRadius: 8,
            }}
            value={gender}
          />
        </View>
        <Button
          onPress={updateProfileHandle}
          style={{
            backgroundColor: '#4caf50',
            borderRadius: 8,
            paddingVertical: 12,
            marginBottom: 16,
          }}
        >
          Update Profile
        </Button>
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>Support</Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#2196f3',
                marginBottom: 12,
                paddingVertical: 8,
              }}
              onPress={() => navigate.navigate('TermPolicy')}
            >
              Term & Policy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: '#2196f3',
                marginBottom: 12,
                paddingVertical: 8,
              }}
              onPress={() => navigate.navigate('AboutUs')}
            >
              About US
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: '#e91e63',
                marginBottom: 12,
                paddingVertical: 8,
              }}
              onPress={logout}
            >
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;