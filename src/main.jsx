import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, ActivityIndicator } from 'react-native';
import HomeView from './view/home.view';
import { useUser } from './context/user.context';
import LoginView from './view/login.view';

const Stack = createNativeStackNavigator();

export default function Main() {
  const {
    isAuth, token, checkAuth, success,
  } = useUser();
  useEffect(() => {
    checkAuth();
  }, [isAuth, token]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!success ? (
        <View style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
        >
          <ActivityIndicator size="large" color="#007aff" />
        </View>
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="home" options={{ headerShown: false }} component={isAuth ? HomeView : LoginView} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
}
