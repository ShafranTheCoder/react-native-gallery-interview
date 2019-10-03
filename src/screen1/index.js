import {createStackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import {GALLERY_HOME, GALLERY_DETAILS} from '../routes';

export default createStackNavigator(
  {
    [GALLERY_HOME]: HomeScreen,
    [GALLERY_DETAILS]: DetailsScreen,
  },
  {
    headerMode: 'none',
  },
);
