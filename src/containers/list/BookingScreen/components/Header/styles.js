import {StyleSheet} from 'react-native';
import {Styles, Colors, Metrics, Responsive} from '../../../../../themes';

const styles = StyleSheet.create({
  bgImage: {
    paddingTop: Metrics.statusBarHeight + Metrics.margin.small,
    ...Styles.center,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.margin.regular,
    paddingBottom: Metrics.margin.large,
  },
  logo: {
    width: Metrics.screenWidth / 2,
    height: 32,
    marginBottom: Metrics.margin.large,
  },
  iconBack: {
    width: 30,
    height: 30,
    ...Styles.center,
  },
  containerState: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.margin.regular,
    paddingVertical: Metrics.margin.huge,
  },
});

export default styles;
