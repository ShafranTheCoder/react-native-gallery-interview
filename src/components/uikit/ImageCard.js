import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {w} from '../../../constans';

const styles = StyleSheet.create({
  container: {
    width: w / 2.4,
    paddingVertical: 10,
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
  },
  h1: {
    paddingTop: 5,
    fontFamily: 'Roboto',
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
  },
  h3: {
    paddingTop: 2,
    fontFamily: 'Roboto',
    fontSize: 12,
    alignSelf: 'center',
    textAlign: 'center',
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
  },
});

const ImageCard = ({data, onPress}) => {
  const {container, sub, h1, h3, cover} = styles;
  const imgDesc = data.description;
  const imgSmallLink = data.urls.small;
  const userName = data.user.first_name;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={sub}>
          <Image style={cover} source={{uri: imgSmallLink}} />
        </View>
        {imgDesc ? (
          <Text numberOfLines={1} ellipsizeMode="tail" style={h1}>
            {imgDesc.toUpperCase()}
          </Text>
        ) : (
          <Text style={h1}>No title</Text>
        )}
        {userName && <Text style={h3}>{userName}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export {ImageCard};
