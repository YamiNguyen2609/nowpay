import {StyleSheet} from 'react-native';
import {Styles, Colors, Metrics, Responsive} from '../../../../../themes';

const styles = StyleSheet.create({
  bgImage: {
    height: 70 + Metrics.statusBarHeight,
    paddingTop: Metrics.statusBarHeight,
    ...Styles.center,
  },
  logo: {
    width: (25 * 540) / 88,
    height: 25,
    marginBottom: Metrics.margin.large,
  },
  containerButton: {
    padding: Metrics.margin.huge,
    paddingHorizontal: Metrics.margin.small,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#acb8cb',
    borderRadius: Metrics.screenHeight,
    paddingVertical: Metrics.margin.regular,
    paddingHorizontal: Metrics.margin.huge + Metrics.margin.tiny,
    alignItems: 'center',
  },
});

export default styles;
