import {createStackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import {LANDSCAPES_HOME, LANDSCAPES_DETAILS} from '../routes';

export default createStackNavigator(
  {
    [LANDSCAPES_HOME]: HomeScreen,
    [LANDSCAPES_DETAILS]: DetailsScreen,
  },
  {
    headerMode: 'none',
  },
);
