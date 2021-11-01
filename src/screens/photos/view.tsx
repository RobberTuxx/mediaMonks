import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import PhotoItem from './components/photoItem';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function (props) {
  const navigation = useNavigation();
  useEffect(() => {
    props.fetchPhoto();
  }, []);

  return (
    <View>
      <View style={{width: '100%', height: 60}}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{fontSize: 18, fontWeight: '900'}}>{'<-'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={props.photos}
        renderItem={({item}) => {
          return (
            <View style={{alignItems: 'center'}}>
              <PhotoItem item={item} />
              <View style={styles.divider} />
            </View>
          );
        }}
      />
    </View>
  );
}
