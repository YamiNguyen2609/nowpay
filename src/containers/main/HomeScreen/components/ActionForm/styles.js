import {StyleSheet} from 'react-native';
import {Styles, Colors, Metrics, Responsive} from '../../../../../themes';

const styles = StyleSheet.create({
  item: {
    width: (Metrics.screenWidth - Metrics.margin.small) / 2,
    backgroundColor: Colors.appWhite,
    ...Styles.center,
    paddingVertical: Metrics.margin.large,
    flexDirection: 'row',
    paddingLeft: Metrics.margin.regular,
  },
});

export default styles;
