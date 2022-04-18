
import React,{useState} from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import {Button} from '../../../commonComponent/Button'
import {styles} from './style';

export const  Card = ({item})=> {

  const [cardBtnColor,setCardBtnColor] =useState(false)
  return (
    <View
    style={styles.imgCard}
    >
    <Image
      source={item.src}
    />

    <View style={{marginTop:10, marginBottom:10}}>
    <Text style={styles.userName}>{item.name}</Text>
    <Text style={styles.price}>{item.price}</Text>
    </View>

    <Image
      source={item.details}
      style={{
        width: '80%',
      }}
     
    />

     <Button withImg={true} content = "احجز الان" btnStyle={cardBtnColor?styles.clickedCardButtonStyle:styles.cardButtonStyle } textStyle={styles.cardLabelStyle}
      handleClick={()=>setCardBtnColor(!cardBtnColor)}
         />

  </View>
  );
}