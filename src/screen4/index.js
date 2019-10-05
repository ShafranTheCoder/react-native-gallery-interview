import {createStackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import {FLORAL_HOME, FLORAL_DETAILS} from '../routes';

export default createStackNavigator(
  {
    [FLORAL_HOME]: HomeScreen,
    [FLORAL_DETAILS]: DetailsScreen,
  },
  {
    headerMode: 'none',
  },
);
