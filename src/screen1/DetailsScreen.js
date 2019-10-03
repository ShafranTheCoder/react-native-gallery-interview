import React, {PureComponent} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Header, ImageBigCard} from '../components/uikit';

class DetailsScreen extends PureComponent {
  render() {
    const {image, name, summary} = this.props.navigation.state.params;
    const {navigation} = this.props;
    const data = {image, name};
    const {container, h1, h2, sub} = styles;
    return (
      <View style="container">
        <Header
          detail
          title={name}
          onPress={() => navigation.goBack()}
          leftIcon="ios-arrow-back"
          leftColor="#fff"
        />

        <View style={sub}>
          <ImageBigCard data={data} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: '#fff',
  },
});

export default DetailsScreen;
