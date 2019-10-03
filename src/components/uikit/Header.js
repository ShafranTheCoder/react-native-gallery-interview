import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#BD3F32',
    paddingLeft: 20,
    paddingTop: 12,
    position: 'relative',
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'Roboto',
  },
  leftButtonStyle: {
    fontSize: 35,
    marginTop: 3,
  },
});

const Header = ({title, detail, onPress, leftIcon, leftColor}) => {
  const {viewStyle, textStyle, leftButtonStyle} = styles;
  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name={leftIcon}
          style={[leftButtonStyle, {paddingLeft: detail ? 0 : 0}]}
          color={leftColor}
        />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[
          textStyle,
          {paddingLeft: leftIcon ? 10 : 0, paddingBottom: leftIcon ? 10 : 0},
        ]}>
        {title}
      </Text>
    </View>
  );
};

export {Header};
