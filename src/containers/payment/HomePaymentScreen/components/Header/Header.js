import React, {Component} from 'react';
import {TouchableOpacity, View, AppState} from 'react-native';
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
  render() {
    const {cashier, state} = this.props;
    return (
      <View>
        <FastImage source={Images.bgHeader} style={styles.bgImage}>
          <TouchableOpacity style={styles.iconBack} onPress={this.props.back}>
            <IonIcon
              name={'ios-chevron-back'}
              size={Fonts.size.h2}
              color={Colors.appWhite}
            />
          </TouchableOpacity>
          <AppText
            text={strings.home_payment_screen.title}
            color={Colors.appWhite}
            size={Fonts.size.h5}
          />
          <View style={styles.iconBack} />
        </FastImage>
        <View style={styles.containerState}>
          <AppText
            size={Fonts.size.h6}
            text={strings.home_payment_screen.cashier + ':' + cashier}
          />
          <View style={{flexDirection: 'row'}}>
            <AppText
              size={Fonts.size.h6}
              text={strings.home_payment_screen.network + ': '}
            />
            <AppText
              color={state ? Colors.appGreen : Colors.appRed}
              size={Fonts.size.h6}
              text={state ? 'Online' : 'Offline'}
            />
          </View>
        </View>
      </View>
    );
  }
}
