import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29b6f6',
  },
  logo: {
    width: Dimensions.get('window').widht,
    height: Dimensions.get('window').height / 2.3,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  logo_container: {},
  body_container: {},
});
