import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Metrics} from '.';
const isIOS = Platform.OS === 'ios';
const isPad = false;
const isTablet = DeviceInfo.isTablet();
const type = {
  // Regular font
  regular: isIOS ? 'Helveticaneue' : 'helveticaneue',
  bold: isIOS ? 'Helveticaneue-Bold' : 'helveticaneuebold',
};

const size = {
  h1: isPad || isTablet ? 58 : 38,
  h2: isPad || isTablet ? 54 : 34,
  h3: isPad || isTablet ? 50 : 30,
  h4: isPad || isTablet ? 46 : 26,
  h5: isPad || isTablet ? 41 : 21,
  h6: isPad || isTablet ? 39 : 19,
  large: isPad || isTablet ? 36 : 16,
  regular: isPad || isTablet ? 34 : 14,
  small: isPad || isTablet ? 32 : 12,
  tiny: isPad || isTablet ? 30 : 10,
};

const style = {
  regular: {
    fontFamily: type.regular,
    fontSize: size.regular,
  },
  title: {
    fontFamily: type.bold,
    fontSize: size.large,
  },
};

export default {
  type,
  style,
  size,
};
