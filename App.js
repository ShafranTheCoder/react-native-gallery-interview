import React from 'react';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import One from './src/screen1';
import Two from './src/screen2';
import Three from './src/screen3';
import Four from './src/screen4';
import Five from './src/screen5';
import BLUE from './constans';
export default createDrawerNavigator(
  {
    Screen1: {
      screen: One,
      navigationOptions: {
        drawerLabel: 'Pets',
        drawerIcon: ({tintColor}) => (
          <MaterialIcons name="pets" size={24} style={{color: tintColor}} />
        ),
      },
    },
    Screen2: {
      screen: Two,
      navigationOptions: {
        drawerLabel: 'Marine',
        drawerIcon: ({tintColor}) => (
          <MaterialIcons name="grade" size={24} style={{color: tintColor}} />
        ),
      },
    },
    Screen3: {
      screen: Three,
      navigationOptions: {
        drawerLabel: 'LandScapes',
        drawerIcon: ({tintColor}) => (
          <MaterialIcons name="grade" size={24} style={{color: tintColor}} />
        ),
      },
    },
    Screen4: {
      screen: Four,
      navigationOptions: {
        drawerLabel: 'Floral',
        drawerIcon: ({tintColor}) => (
          <MaterialIcons name="grade" size={24} style={{color: tintColor}} />
        ),
      },
    },
    Screen5: {
      screen: Five,
      navigationOptions: {
        drawerLabel: 'Animals',
        drawerIcon: ({tintColor}) => (
          <MaterialIcons name="pets" size={24} style={{color: tintColor}} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Screen1',
    contentOptions: {
      activeTintColor: BLUE,
      itemsContainerStyle: {
        marginVertical: 65,
      },
    },
  },
);

// export default createBottomTabNavigator(
//   {
//     Pets: One,
//     Marine: Two,
//     Landscapes: Three,
//     Floral: Four,
//     Animals: Five,
//   },
//   {
//     navigationOptions: ({navigation}) => ({
//       tabBarIcon: ({focused, tintColor}) => {
//         const {routeName} = navigation.state;
//         let iconName;
//         if (routeName === 'Pets') {
//           iconName = focused ? 'ios-videocam' : 'ios-play';
//         } else if (routeName === 'Marine') {
//           iconName = focused ? 'ios-videocam' : 'ios-play';
//         } else if (routeName === 'Landscapes') {
//           iconName = focused ? 'ios-videocam' : 'ios-play';
//         } else if (routeName === 'Floral') {
//           iconName = focused ? 'ios-videocam' : 'ios-play';
//         } else if (routeName === 'Animals') {
//           iconName = focused ? 'ios-videocam' : 'ios-play';
//         }
//         return <Ionicons name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {activeTintColor: BLUE, inactiveTintColor: 'gray'},
//   },
// );
