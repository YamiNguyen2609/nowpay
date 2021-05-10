import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {
  AppText,
  AppButton,
  AppInput,
  AppDivider,
} from '../../../../../components';
import styles from './styles';
import {
  Colors,
  Fonts,
  Images,
  Metrics,
  Responsive,
  Styles,
} from '../../../../../themes';
import strings from '../../../../../languages';
import FastImage from 'react-native-fast-image';

let username = '';
let password = '';

export default class LoginView extends Component {
  state = {
    isShow: false,
  };

  _onPressLogin = () => this.props.onLogin(username, password);

  render() {
    return (
      <View style={styles.container}>
        <AppInput
          ref={ip => (username = ip)}
          placeholder={strings.login_screen.username}
          height={50}
          width={Metrics.screenWidth - Metrics.margin.large * 3}
        />
        <AppDivider height={Metrics.margin.huge} color={'transparent'} />
        <View style={styles.input}>
          <AppInput
            ref={ip => (password = ip)}
            placeholder={strings.login_screen.password}
            height={50}
            border={0}
            password={this.state.isShow}
            width={
              Metrics.screenWidth -
              Metrics.margin.large * 3 -
              Fonts.size.h4 -
              Metrics.margin.regular
            }
          />
          <TouchableOpacity
            onPress={() => this.setState({isShow: !this.state.isShow})}>
            <IonIcon
              name={this.state.isShow ? 'ios-eye' : 'ios-eye-off'}
              size={Fonts.size.h4}
              color={Colors.appLightGrayColor}
            />
          </TouchableOpacity>
        </View>
        <AppDivider height={Metrics.margin.huge} color={'transparent'} />
        <AppButton
          height={50}
          width={Metrics.screenWidth - Metrics.margin.large * 3}
          text={strings.login_screen.login}
          onPress={this._onPressLogin}
          color={Colors.appWhite}
          size={Fonts.size.h6}
          bold={true}
          bgColor={Colors.appPrimaryColor}
          border={0}
        />
      </View>
    );
  }
}
