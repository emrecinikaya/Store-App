import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

export default function Products({navigation}) {
  const {loading, data, error} = useFetch('https://fakestoreapi.com/products');

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProducts = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data} renderItem={renderProducts} />;
}
