import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { AppColors, WINDOW_WIDTH } from '../utils/AppStyles';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function MainButton({label,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonMainView}>
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    buttonMainView:{
        width:WINDOW_WIDTH*0.9,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:AppColors.primaryColor,
        paddingVertical:10,
        borderRadius:15,
        marginVertical:20
    },
    buttonText:{
        color:'#fff',
        fontSize:RFPercentage(2.5),
     
    }
});
