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
            text={strings.booking_screen.title}
            color={Colors.appWhite}
            size={Fonts.size.h5}
          />
          <View style={styles.iconBack} />
        </FastImage>
      </View>
    );
  }
}
