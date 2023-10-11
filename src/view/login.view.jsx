import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useUser } from '../context/user.context';

export default function LoginView() {
  const { login } = useUser();
  const handleLogin = () => {
    login({
      username: 'mor_2314',
      password: '83r5^_',
    });
  };
  return (
    <View>
      <Text>LoginView</Text>
      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: 'green', padding: 8 }}>
        <Text style={{ color: 'white' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
