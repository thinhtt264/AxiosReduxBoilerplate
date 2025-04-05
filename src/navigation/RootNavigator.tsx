import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppSelector } from '@/store';
import { AppStackParamList, ScreenNames } from './types';
import { HomeScreen } from '@/features/home';
import { AuthStack } from './stacks';

export const AppStack = createNativeStackNavigator<AppStackParamList>();

const RootNavigator: FC = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      {isAuthenticated ? (
        <AppStack.Group
          screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
          <AppStack.Screen name={ScreenNames.Home} component={HomeScreen} />
        </AppStack.Group>
      ) : (
        <AppStack.Screen name={ScreenNames.AuthStack} component={AuthStack} />
      )}
    </AppStack.Navigator>
  );
};

export default RootNavigator;
