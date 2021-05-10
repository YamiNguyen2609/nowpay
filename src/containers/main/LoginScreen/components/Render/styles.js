import {StyleSheet} from 'react-native';
import {Styles, Colors, Metrics, iPhoneHelper} from '../../../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_login: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logo: {
    width: Metrics.screenWidth / 3,
    height: Metrics.screenWidth / 3,
  },
  version: {
    position: 'absolute',
    top: iPhoneHelper.isIPhoneX ? 50 : 15,
    right: Metrics.margin.small,
  },
});

export default styles;
