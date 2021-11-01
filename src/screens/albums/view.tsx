import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import AlbumItem from './components/albumItem';

export default function (props) {
  useEffect(() => {
    props.fetchAlbum();
  }, []);

  return (
    <View>
      <FlatList
        data={props.albums}
        renderItem={({item}) => {
          return (
            <View style={{alignItems: 'center'}}>
              <AlbumItem item={item} />
              <View
                style={{
                  width: 350,
                  height: 1,
                  borderWidth: 1,
                  borderColor: '#D2d2d2',
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}
