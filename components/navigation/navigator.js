import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../pages/homescreen';
import SingInScreen from '../../pages/signinscreen';
import SingUpScreen from '../../pages/signupscreen';

const Drawer = createDrawerNavigator();

export default function Navigator() {
    return( <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Sign Up" component={SingUpScreen} />
          <Drawer.Screen name="Sign In" component={SingInScreen} />
        </Drawer.Navigator>
      </NavigationContainer>)
}