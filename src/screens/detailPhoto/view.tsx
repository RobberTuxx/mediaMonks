import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function () {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Image
        source={{uri: route.params?.item.url}}
        style={{width: 150, height: 150}}
      />
      <Text>title: {route.params?.item.title}</Text>
      <Text>albumId: {route.params?.item.albumId}</Text>
      <Text>ID: {route.params?.item.id}</Text>
      <Text>url: {route.params?.item.url}</Text>
      <Text>thumbnailUrl: {route.params?.item.thumbnailUrl}</Text>
      <Button title={'regresar'} onPress={() => navigation.goBack()} />
    </View>
  );
}
