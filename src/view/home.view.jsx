import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUser } from '../context/user.context';

export default function HomeView() {
  const { token, logout } = useUser();

  const handlePress = () => {
    logout();
  };

  return (
    <SafeAreaView>
      <Text>
        Token:
        {token ?? ' Empty'}
      </Text>
      <TouchableOpacity onPress={handlePress} style={{ padding: 8, backgroundColor: 'green' }}>
        <Text style={{ color: 'white' }}>
          Logout
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Welcome</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
