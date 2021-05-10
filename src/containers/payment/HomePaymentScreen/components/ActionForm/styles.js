import {StyleSheet} from 'react-native';
import {Styles, Colors, Metrics, Responsive} from '../../../../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appWhite,
    paddingTop: Metrics.margin.large,
  },
  button: {
    width: Metrics.screenWidth - Metrics.margin.large * 2,
    marginHorizontal: Metrics.margin.large,
    paddingVertical: Metrics.margin.large,
    backgroundColor: Colors.appPrimaryColor,
    marginBottom: Metrics.margin.regular,
  },
  containerSync: {
    ...Styles.center,
    width: Metrics.screenWidth - Metrics.margin.large * 2,
    marginHorizontal: Metrics.margin.large,
    backgroundColor: '#efefef',
    marginBottom: Metrics.margin.huge,
    paddingBottom: Metrics.margin.huge,
    paddingTop: Metrics.margin.large,
  },
});

export default styles;
