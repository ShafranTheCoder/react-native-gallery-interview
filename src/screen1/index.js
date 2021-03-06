import {createStackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import {PETS_HOME, PETS_DETAILS} from '../routes';

export default createStackNavigator(
  {
    [PETS_HOME]: HomeScreen,
    [PETS_DETAILS]: DetailsScreen,
  },
  {
    headerMode: 'none',
  },
);
