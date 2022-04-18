import { StyleSheet, View,Text } from 'react-native';
import AppLoading from 'expo-app-loading';


import {HomeScreen} from './src/screens';
import { useFonts,Cairo_200ExtraLight,
  Cairo_300Light,
  Cairo_400Regular,
  Cairo_600SemiBold,
  Cairo_700Bold,
  Cairo_900Black  } from '@expo-google-fonts/cairo';


export default function App() {

  let [fontsLoaded] = useFonts({
    Cairo_200ExtraLight,
  Cairo_300Light,
  Cairo_400Regular,
  Cairo_600SemiBold,
  Cairo_700Bold,
  Cairo_900Black ,
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <View style={styles.container} >
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
