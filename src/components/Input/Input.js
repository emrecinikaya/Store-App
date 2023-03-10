import {View, TextInput} from 'react-native';
import React from 'react';

import styles from './Input.style';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function input({
  placeholder,
  value,
  onType,
  iconName,
  isSecure,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
      />
      <Icon name={iconName} size={25} color="gray" />
    </View>
  );
}
