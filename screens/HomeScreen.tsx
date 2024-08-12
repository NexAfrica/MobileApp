import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Arrow from '../assets/images/Arrow.png'
import { Colors } from '@/constants/Colors';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
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
z
<View style={styles.container}>
<View >
      <Text style={styles.homeHeader}>Nex{"\n"}Africa.</Text>
      <Text style={styles.homeText}>Unlock a world of opportunities tailored to your unique skills and aspirations. Whether you're seeking full-time employment, internships, or freelance projects, </Text>
    </View>

    <TouchableOpacity style={styles.button} onPress={() => { /* Add your navigation or action here */ }}>
        <Text style={styles.buttonText}>GET STARTED</Text>
        <Image source={Arrow}/>
      </TouchableOpacity>
</View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  homeHeader:{
fontSize:60,
fontWeight:'800',
paddingHorizontal:22,
paddingTop:87
  },
  homeText:{
fontSize:14,
fontWeight:'regular',
paddingLeft:22,
paddingRight:44,
textAlign:'left',
  },
  button: {
    backgroundColor: Colors.light.backgroundColor,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:140,
    position: 'absolute',
    bottom: 0,

    justifyContent: "center",
    paddingVertical: 42,
    paddingHorizontal: 16,
  },
  buttonText:{
    color:Colors.light.textSecondary,
    fontSize:16,
    fontWeight:'bold'
  }

});
