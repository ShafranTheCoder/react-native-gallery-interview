import {createStackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import {MARINE_HOME, MARINE_DETAILS} from '../routes';

export default createStackNavigator(
  {
    [MARINE_HOME]: HomeScreen,
    [MARINE_DETAILS]: DetailsScreen,
  },
  {
    headerMode: 'none',
  },
);
