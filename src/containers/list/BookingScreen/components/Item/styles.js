import {StyleSheet} from 'react-native';
import {Styles, Colors, Metrics, Responsive} from '../../../../../themes';

const styles = StyleSheet.create({
  container: {
    paddingVertical: Metrics.margin.large,
    flexDirection: 'row',
    paddingHorizontal: Metrics.margin.regular,
  },
  icon: {
    width: 30,
    height: 30,
  },
  containerInfo: {
    flex: 1,
    // paddingHorizontal: Metrics.margin.large,
  },
});

export default styles;
