


import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

import {styles} from './style';

import {items} from './icons.js'

export const  BottomMenu = ()=> {


  return (

    <View
    style={styles.menuContainer}>
        {items.map(({src,id,label})=>{

            return(
                <View
                key={id}
                style={styles.menuItems}
                >
              <TouchableOpacity style={styles.iconContainer}>
              <Image
              source={src}
              style={{position:'absolute'}}
            />
            </TouchableOpacity>
            <Text style={styles.menuLabels} >{label}</Text>
       
             </View>
                
            )
        })}



        
    </View>
  );
}