



import {StyleSheet,Dimensions} from 'react-native';

import { 
  
    Cairo_400Regular,
  
  } from '@expo-google-fonts/cairo'; 
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  
    menuContainer:{

    width:screenWidth, height:'10%',  flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
},

    menuLabels:{color:'#6B6B6B', fontSize:7, textAlign:'center', fontFamily:'Cairo_400Regular'},

    menuItems:{flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
},

    iconContainer:{width:30,height:30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    }

})