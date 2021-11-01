import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function PhotoItem(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate({name:'detail', params:{item: props.item}});
      }}>
      <Image
        source={{uri: props.item.thumbnailUrl}}
        style={{width: 50, height: 50}}
      />
      <View style={styles.column}>
        <Text style={{color: '#b2b2b2'}}>ID: {props.item.id}</Text>
        <Text numberOfLines={1} style={styles.text}>
          title: {props.item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 5,
  },
  column: {
    justifyContent: 'center',
    marginLeft: 15,
  },
  text: {
    width: 300,
  },
});
