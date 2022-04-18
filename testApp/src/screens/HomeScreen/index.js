



import React from 'react';
import {
  View,
} from 'react-native';

import { BottomMenu } from './BottomMenu';
import { MainSection } from './MainSection';
import WelcomeSection  from './WelcomeSection';



export const  HomeScreen = ()=> {

  return (
    <View

    style={{flex:1,flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
height:'100%'}}
      
      >

          <WelcomeSection />

          <MainSection />
          <BottomMenu />


    </View>
  );
}