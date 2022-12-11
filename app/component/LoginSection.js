import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {MainCardWidth, WINDOW_WIDTH} from '../utils/AppStyles';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import MainButton from './MainButton';
import notifyMessage from '../utils/NotifyMessage';
import {phone} from 'phone';

export default function LoginSection() {
  const [userEmail, setuserEmail] = useState('');
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');
  const [userMobileNumber, setuserMobileNumber] = useState('');
  const [mobileCountryCode, setmobileCountryCode] = useState('+971');

  //validate user data and submit
  const validateAndSubmit = () => {
    try {
      if (!userEmail) {
        notifyMessage('Please enter email!');
        return;
      }
      var regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!userEmail.match(regex)) {
        notifyMessage('Please enter valid email ');
        return;
      }
      if (!userName) {
        notifyMessage('Please add user name');
        return;
      }
      if (!password) {
        notifyMessage('Please add password');
        return;
      }
      if (!userMobileNumber) {
        notifyMessage('Please add user mobile number');
        return;
      }
      let isPhoneValid = phone(mobileCountryCode + userMobileNumber);
      if (!isPhoneValid.isValid) {
        notifyMessage('Please add valid phone number');
        return;
      }
      notifyMessage('Validation complete');
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.mainCardView}>
      <View style={styles.titleView}>
        <Text style={styles.headingText}>Login</Text>
      </View>
      <TextInput
        placeholder="Email"
        style={styles.textInputStyle}
        placeholderTextColor="gray"
        onChangeText={text => setuserEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Name"
        style={styles.textInputStyle}
        placeholderTextColor="gray"
        onChangeText={text => setuserName(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInputStyle}
        placeholderTextColor="gray"
        onChangeText={text => setpassword(text)}
        secureTextEntry={true}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput
          placeholder={'+971'}
          style={styles.textInputStyle}
          placeholderTextColor="gray"
          onChangeText={text => setmobileCountryCode(text)}
        />
        <TextInput
          placeholder="Mobile"
          style={[styles.textInputStyle, {width: '80%'}]}
          placeholderTextColor="gray"
          keyboardType="phone-pad"
          onChangeText={text => setuserMobileNumber(text)}
        />
      </View>
      <MainButton label={'Submit'} onPress={() => validateAndSubmit()} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    width: '100%',
  },
  mainCardView: {
    width: MainCardWidth,
    alignSelf: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginVertical: 20,
    borderRadius: WINDOW_WIDTH * 0.025,
    padding: 10,
    borderTopRightRadius: -100,
  },
  headingText: {
    textAlign: 'center',
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
    color: '#000',
  },
  textInputStyle: {
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingHorizontal: 5,
  },
});
