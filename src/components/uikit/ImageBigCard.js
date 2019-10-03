import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {w, h} from '../../../constans';

const styles = StyleSheet.create({
  container: {},
  sub: {
    backgroundColor: 'white',
  },
  cover: {
    width: w,
    height: h - 60,
  },
});

const ImageBigCard = ({data}) => {
  const {container, sub, cover} = styles;
  const imgBigLink = data;
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{uri: imgBigLink}} />
      </View>
    </View>
  );
};

export {ImageBigCard};
