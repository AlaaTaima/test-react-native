
import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';


import {Button} from '../../../commonComponent';

import {styles} from './style';

function  WelcomeSection()  {

  const [btnColor,setBtnColor]=useState(false)

  return (


    <>
      <StatusBar animated={true} />
    
    <View
    style={styles.mainContainer}>

        <View style={styles.imgContainer}>
           <Image
              source={require('../../../assets/images/welcomImg.png')}
              style={styles.imgStyle}
            />
        </View>




            <View style={styles.contentPart}>
              <View style={styles.subContainer}>
                <View style={styles.titlesContainer}>
                <Text style={styles.mainTitle}>نحن سعداء بوجودك هنا</Text>
                <Text style={styles.subTitle}>ابدأ باختيار مربيتك وموعدك المناسبين لنكون في خدمتكم أقرب ما يمكن!</Text>
                </View>

                <Button withImg={false} content = "سجل دخول" btnStyle={btnColor?styles.clickedButtonStyle:styles.buttonStyle } textStyle={styles.labelStyle}
                handleClick={()=>setBtnColor(!btnColor)}
                 />
              </View>

            </View>



           



    </View>
    </>

  );
}

export default WelcomeSection