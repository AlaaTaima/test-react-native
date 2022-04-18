
import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image
} from 'react-native';



export const  Button = ({content,btnStyle,textStyle,withImg,handleClick})=> {

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={btnStyle}
      onPress={handleClick}
      >

    {withImg &&
    <Image source={require('../../assets/images/registerIcon.png')} resizeMode='contain' style={{flex:.2 }} />}

    <Text style={textStyle} > {content}</Text>
    </TouchableOpacity>
  );
}
