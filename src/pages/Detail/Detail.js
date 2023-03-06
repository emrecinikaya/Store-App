import React from 'react';
import {View, Text, Image} from 'react-native';
import Config from 'react-native-config';

import styles from './Detail.style';

import useFetch from '../../hooks/useFetch/useFetch';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

export default function Detail({route}) {
  const {id} = route.params;

  const {loading, data, error} = useFetch(
    'https://fakestoreapi.com/products' + '/' + id,
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.image}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price}</Text>
      </View>
    </View>
  );
}
