import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';

import {Header, ImageBigCard} from '../components/uikit';

class DetailsScreen extends PureComponent {
  render() {
    const {navigation} = this.props;
    const {description} = this.props.navigation.state.params;
    const userName = this.props.navigation.state.params.user.first_name;
    const data = this.props.navigation.state.params.urls.regular;
    const {sub} = styles;

    return (
      <View style="container">
        <Header
          detail
          title={description ? description : userName}
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
