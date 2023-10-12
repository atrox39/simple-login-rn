import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
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
    <SafeAreaView>
      <Text>LoginView</Text>
      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: 'green', padding: 8 }}>
        <Text style={{ color: 'white' }}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
