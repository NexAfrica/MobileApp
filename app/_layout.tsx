import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';

import { useColorScheme } from '@/hooks/useColorScheme';
import Home from './screen/home';
import register from './screen/register';
import SignupScreen from './screen/SignupScreen';
import LoginScreen from './screen/LoginScreen';
import ForgotScreen from './screen/ForgotScreen';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack.Navigator initialRouteName="screen/home">
        <Stack.Screen name="screen/home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="screen/register" component={register} options={{ headerShown: false }}/>
        <Stack.Screen name="screen/SignupScreen" component={SignupScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="screen/LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="screen/ForgotScreen" component={ForgotScreen} options={{ headerShown: false }}/>



      </Stack.Navigator>
  );
}

