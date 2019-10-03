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
  const {image} = data;
  const img = `https${image.medium.slice(4)}`;
  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{uri: img}} />
      </View>
    </View>
  );
};

export {ImageBigCard};
