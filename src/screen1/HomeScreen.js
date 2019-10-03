import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Header, ImageCard, Layout} from '../components/uikit';

import {STARGATE_DETAILS} from '../routes';

const url = 'http://api.tvmaze.com/search/shows?q=stargate';
const url2 =
  'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

export default class HomeScreen extends Component {
  state = {
    title: 'GALLERY',
    data: [],
    img: [],
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
    /////////////

    const res = await fetch(url2, {
      method: 'GET',
    });
    const img = await res.json();
    this.setState({img});
  };

  render() {
    const {title, data} = this.state;
    const {navigation} = this.props;
    console.log(this.state.data);
    console.log(this.state.img);
    return (
      <View>
        <Header title={title} />
        <ScrollView>
          <Layout>
            {data.map(item => (
              <ImageCard
                data={item.show}
                key={item.show.id}
                onPress={() => navigation.navigate(STARGATE_DETAILS, item.show)}
              />
            ))}
          </Layout>
        </ScrollView>
      </View>
    );
  }
}
