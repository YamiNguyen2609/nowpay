import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import {AppButton, AppText} from '../../../../../components';
import {
  Colors,
  Fonts,
  Images,
  Metrics,
  Responsive,
  Styles,
} from '../../../../../themes';
import strings from '../../../../../languages';

export default class Header extends Component {
  state = {};
  render() {
    const {state} = this.props;
    return (
      <View>
        <FastImage source={Images.bgHeader} style={styles.bgImage}>
          <FastImage source={Images.logoVertical} style={styles.logo} />
          <AppText
            text={strings.home_screen.slogan}
            color={Colors.appWhite}
            size={Fonts.size.small}
          />
        </FastImage>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={[
              styles.button,
              state == 0 ? {backgroundColor: Colors.appColor} : null,
            ]}
            onPress={() => this.props.onPressChange(0)}>
            <IonIcon
              name={'ios-flash'}
              color={Colors.appWhite}
              size={Fonts.size.h5}
            />
            <AppText
              text={strings.home_screen.light.toUpperCase()}
              color={Colors.appWhite}
              size={Fonts.size.h6}
              bold={true}
              style={{marginLeft: Metrics.margin.small}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              state == 1 ? {backgroundColor: Colors.appColor} : null,
            ]}
            onPress={() => this.props.onPressChange(1)}>
            <IonIcon
              name={'ios-water'}
              color={Colors.appWhite}
              size={Fonts.size.h5}
            />
            <AppText
              text={strings.home_screen.water.toUpperCase()}
              color={Colors.appWhite}
              size={Fonts.size.h6}
              bold={true}
              style={{marginLeft: Metrics.margin.small}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              state == 2 ? {backgroundColor: Colors.appColor} : null,
            ]}
            onPress={() => this.props.onPressChange(2)}>
            <IonIcon
              name={'ios-flame'}
              color={Colors.appWhite}
              size={Fonts.size.h5}
            />
            <AppText
              text={strings.home_screen.gas.toUpperCase()}
              color={Colors.appWhite}
              size={Fonts.size.h6}
              bold={true}
              style={{marginLeft: Metrics.margin.small}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
