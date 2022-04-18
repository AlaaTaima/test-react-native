


import React,{useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';

import {usersData} from './data.js';
import {Button} from '../../../commonComponent'
import {styles} from './style';
import { Card } from './Card.js';

export const  MainSection = ()=> {

  const [btnColor,setBtnColor]=useState(false)

  const renderItems = ({item}) => {
    return (

      <Card item={item} />
    );
  };

  return (
    <View
    style={styles.mainContainer}
      >
        <View style={styles.subContainer}>


       
          
        <View style={styles.contentPart}>
              <View style={styles.contentContainer}>
                <View style={styles.titlesContainer}>
                <Text style={styles.subTitle}>قم باختيار الموعد الذي يناسب عائلتك لتجد خيارات متعددة
                 </Text>
                </View>

                <Button withImg={false} content = "حدد الموعد" btnStyle={btnColor?styles.clickedButtonStyle: styles.buttonStyle} textStyle={styles.labelStyle}
                 handleClick={()=>setBtnColor(!btnColor)}

                 />
              </View>

            </View>

            <View style={styles.imgContainer}>
           <Image
              source={require('../../../assets/images/calenderImg.png')}
              style={styles.imgStyle}
            />
        </View>


        </View>

        <View style={styles.sliderContainer}>

          <FlatList
            data={usersData}
            renderItem={renderItems}
            keyExtractor={item => item.id}
            horizontal={true}
          />


        </View>





    </View>
  );
}