
    import {StyleSheet, Dimensions,
        } from 'react-native';

        import { 
            Cairo_400Regular,
            Cairo_600SemiBold,
            Cairo_900Black 
        } from '@expo-google-fonts/cairo'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  
    mainContainer :{width:screenWidth, flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:'30%'
  },

    imgContainer:{width:screenWidth/2-20,
    
    height:'100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight:5,
},
    imgStyle:{ position:'absolute',right:0, left:0,top:20,bottom:0
    },

    contentPart:{
    width:screenWidth/2+20,
    height:'100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},

subContainer:{
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
width:'80%',
height:'70%',
},

    mainTitle:{fontSize:16, color:'black', fontWeight:'bold', textAlign:'right', fontFamily:'Cairo_600SemiBold'},

    subTitle:{fontSize:8, color:'black', textAlign:'right', fontFamily:"Cairo_400Reglar"},

    titlesContainer:{
    borderRightWidth: 2 ,
    borderRightColor: '#F8934E',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:'30%',
    width:'90%',
    },

    buttonStyle:{width:'90%',fontFamily:'Cairo_900Black',
    height:30, backgroundColor:"#545ED6", borderRadius:15, flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center',marginTop:'13%'  },

    clickedButtonStyle:{width:'90%',fontFamily:'Cairo_900Black',
    height:30, backgroundColor:"#F8934E", borderRadius:15, flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center',marginTop:'13%'  },

    labelStyle:{color:"white", textAlign:'center'}

})