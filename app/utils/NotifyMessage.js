import {Platform, ToastAndroid} from 'react-native';
import Toast from 'react-native-simple-toast';

export default function notifyMessage(msg) {
  try {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg,ToastAndroid.SHORT);
    } else {
      Toast.show(msg);
    }
  } catch (error) {
    console.log('error', error)
  }
}
