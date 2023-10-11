import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useUser } from '../context/user.context';

export default function HomeView() {
  const { token, logout } = useUser();

  const handlePress = () => {
    logout();
  };

  return (
    <View>
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
    </View>
  );
}
