import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Header, ImageCard, Layout} from '../components/uikit';

import {GALLERY_DETAILS} from '../routes';

const url =
  'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

export default class HomeScreen extends Component {
  state = {
    title: 'GALLERY',
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
        <Header title={title} />
        <ScrollView>
          <Layout>
            {data.map(item => (
              <ImageCard
                data={item}
                key={item.id}
                onPress={() => navigation.navigate(GALLERY_DETAILS, item)}
              />
            ))}
          </Layout>
        </ScrollView>
      </View>
    );
  }
}
