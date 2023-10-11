import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from './view/home.view';
import { useUser } from './context/user.context';
import LoginView from './view/login.view';

const Stack = createNativeStackNavigator();

export default function Main() {
  const { isAuth, token, checkAuth } = useUser();
  useEffect(() => {
    checkAuth();
    console.log('Ok');
  }, [isAuth, token]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" options={{ headerShown: false }} component={isAuth ? HomeView : LoginView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
