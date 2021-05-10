import {StyleSheet} from 'react-native';
import {Styles, Colors, Metrics, Responsive} from '../../../../../themes';

const styles = StyleSheet.create({
  container: {
    height: Metrics.screenHeight / 3,
    backgroundColor: Colors.appWhite,
    alignItems: 'center',
    borderRadius: Metrics.borderRadius.large,
    overflow: 'hidden',
  },
});

export default styles;
