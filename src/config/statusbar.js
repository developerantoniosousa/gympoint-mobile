import { Platform, StatusBar } from 'react-native';

if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('#EE4E62');
  StatusBar.setBarStyle('light-content');
} else {
  StatusBar.setBarStyle('dark-content');
}
