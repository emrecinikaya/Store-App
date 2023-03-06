import {SafeAreaView, View, Text, Image, Alert} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

import styles from './Login.style';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import Config from 'react-native-config';
import usePost from '../../hooks/usePost';

export default function Login({navigation}) {
  const {data, loading, error, post} = usePost();

  function handleLogin(values) {
    post('https://fakestoreapi.com/auth' + '/login', values);
  }

  if (error) {
    Alert.alert('Dükkan', 'Bir Hata Oluştu');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Dükkan', 'Kullanıcı Bulunamadı');
    } else {
      navigation.navigate('ProductsPage');
    }
    console.log(data);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login-logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="kullanıcı adı giriniz"
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="şifrenizi giriniz"
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />
            <Button text="Giriş yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}
