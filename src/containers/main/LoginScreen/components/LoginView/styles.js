import {StyleSheet} from 'react-native';
import {Styles, Colors, Metrics} from '../../../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: Metrics.margin.large,
  },
  input: {
    borderRadius: Metrics.borderRadius.small,
    borderColor: Colors.appLightGrayColor,
    borderWidth: 0.8,
    flexDirection: 'row',
    paddingRight: Metrics.margin.regular,
    alignItems: 'center',
  },
});

export default styles;
