
import {StyleSheet,Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import { 
    Cairo_200ExtraLight,
    Cairo_300Light,
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
    Cairo_900Black 
  } from '@expo-google-fonts/cairo'; 

export const styles = StyleSheet.create({
  
    mainContainer:{width:screenWidth,backgroundColor:'#A4C5E5', height:"60%", 
    borderTopLeftRadius: 27,
 borderTopRightRadius: 27,
 flexDirection: 'column',
 justifyContent: 'space-around',
 alignItems: 'center',
},

subContainer:{
    width:'90%',
    height:'30%',
    backgroundColor:'#545ED6',
    borderRadius:15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
},
sliderContainer:{
    width:screenWidth,
    height:'53%',
},
contentPart:{
    width:'60%',
    height:'100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},

contentContainer:{
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
width:'85%',
height:'70%',
},

    subTitle:{fontFamily:'Cairo_700Bold',fontSize:8, color:'white', textAlign:'right', fontWeight:'bold'},

    titlesContainer:{
    borderRightWidth: 2 ,
    borderRightColor: '#F8934E',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:'30%',
    width:'70%',
    paddingRight:11,
    },

    buttonStyle:{width:'80%',fontFamily:'Cairo_700Bold',
    height:30, backgroundColor:"white", borderRadius:15, flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center',marginTop:'6%',
},

clickedButtonStyle:{width:'80%',fontFamily:'Cairo_700Bold',
height:30, backgroundColor:"#F8934E", borderRadius:15, flexDirection: 'row',
justifyContent: 'center', alignItems: 'center',marginTop:'6%',},
    
    labelStyle:{color:"black", textAlign:'center'},

    imgContainer:{
        width:'40%',
        height:'85%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
  
    imgStyle:{
        position:"absolute",
    },

    imgCard:{
        borderRadius: 14,
        backgroundColor:'white',
        width:180,
        height:250,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        marginLeft: 5,

      },
      userName:{fontFamily:'Cairo_700Bold',color:'#012340', fontSize:14, fontWeight:'bold'},
      price:{color:'black', fontSize:10, fontWeight:'bold',fontFamily:'Cairo_700Bold'},

      cardButtonStyle:{width:'80%',fontFamily:'Cairo_700Bold',
    height:30, backgroundColor:"#F8934E", borderRadius:15, flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center', marginTop:13},

    clickedCardButtonStyle:{width:'80%',fontFamily:'Cairo_700Bold',
    height:30, backgroundColor:"#545ED6", borderRadius:15, flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center', marginTop:13},
    
    cardLabelStyle:{color:"white", textAlign:'center', fontSize:9, fontWeight:'bold',fontFamily:'Cairo_700Bold'}
})