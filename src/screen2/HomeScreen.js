import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Header, ImageCard, Layout} from '../components/uikit';

import {MARINE_DETAILS} from '../routes';

const randomNumber = Math.floor(Math.random() * 10);
const url = `https://api.unsplash.com/collections/1262111/photos?page=${randomNumber}&&per_page=20&&client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`;

export default class HomeScreen extends Component {
  state = {
    title: 'MARINE',
    data: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
      });
      const data = await response.json();
      this.setState({data});
    } catch (e) {
      throw e;
    }
  };

  render() {
    const {title, data} = this.state;
    const {navigation} = this.props;
    return (
      <View>
        <Header
          leftIcon="ios-menu"
          leftColor="#fff"
          title={title}
          onPress={() => navigation.openDrawer()}
        />
        <ScrollView>
          <Layout>
            {data.map(item => (
              <ImageCard
                data={item}
                key={item.id}
                onPress={() => navigation.navigate(MARINE_DETAILS, item)}
              />
            ))}
          </Layout>
        </ScrollView>
      </View>
    );
  }
}
