import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './Button.style';

export default function Button({text, onPress, loading}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.title}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
