import {createStackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import {ANIMALS_HOME, ANIMALS_DETAILS} from '../routes';

export default createStackNavigator(
  {
    [ANIMALS_HOME]: HomeScreen,
    [ANIMALS_DETAILS]: DetailsScreen,
  },
  {
    headerMode: 'none',
  },
);
