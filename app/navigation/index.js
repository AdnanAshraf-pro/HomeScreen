import React,{useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import Home from '../screen/Home';
import {Pressable, View, Text,StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppColors} from '../utils/AppStyles';
import AppContext from '../utils/AppContext';

const Tab = createBottomTabNavigator();

export default function Router() {
  const {cartList} = useContext(AppContext)
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
        >
          <Tab.Screen
            options={{
              tabBarIcon: () => {
                return (
                  <Ionicons
                    name="home"
                    size={24}
                    color={AppColors.primaryColor}
                  />
                );
              },
              tabBarLabelStyle: {
                color: AppColors.primaryColor,
              },
            }}
            name="Home"
            component={Home}
          />
          <Tab.Screen
            name="Deals"
            options={{
              tabBarButton: props => <Pressable {...props} isDisabled={true} />,
            }}
            component={() => <View />}
            //   component={ProfileScreen}
          />
          <Tab.Screen
            name="Cart"
            options={{
              tabBarIcon: () => {
                return (
                  <View>
                    <View style={styles.cartNumberView}>

                    <Text style={styles.cartNumberText}>{cartList?.length}</Text>
                    </View>
                    <Ionicons
                      name="cart"
                      size={24}
                      style={{position:'absolute'}}
                      color={AppColors.primaryColor}
                    />
                  </View>
                );
              },
              tabBarLabelStyle: {
                color: AppColors.primaryColor,
              },
            }}
            component={() => <View />}
            //   component={ProfileScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  cartNumberView:{
    backgroundColor:"#E03A3F",
    alignItems:'center',
    justifyContent:'center',
    height:20,
    width:20,
    borderRadius:10,
    alignSelf:'flex-end',
    left:15,

    zIndex:5,
    top:-12
  },
  cartNumberText:{
    color:'#fff',

  }
})