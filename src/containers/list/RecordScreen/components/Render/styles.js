import {StyleSheet} from 'react-native';
import {Styles, Colors, Metrics, Responsive} from '../../../../../themes';

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Metrics.margin.regular,
    paddingHorizontal: Metrics.margin.regular,
  },
  button: {
    paddingHorizontal: Metrics.margin.regular,
    height: 40,
    borderWidth: 0.8,
    borderColor: Colors.appLightGrayColor,
    borderRadius: Metrics.borderRadius.small,
    flexDirection: 'row',
    width: (Metrics.screenWidth - Metrics.margin.regular * 3) / 3,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
