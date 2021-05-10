import React, {Component} from 'react';
import {View} from 'react-native';
import {AppButton, AppText} from '../../../../../components';

import styles from './styles';
import strings from '../../../../../languages';
import {Colors, Fonts, Metrics} from '../../../../../themes';

export default class ActionForm extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <AppButton
            style={styles.button}
            text={strings.home_payment_screen.print_receipt.toUpperCase()}
            color={Colors.appWhite}
            size={Fonts.size.large}
          />
          <AppButton
            style={styles.button}
            text={strings.home_payment_screen.print_summary.toUpperCase()}
            color={Colors.appWhite}
            size={Fonts.size.large}
          />
          <AppButton
            style={styles.button}
            text={strings.home_payment_screen.list_recorded.toUpperCase()}
            color={Colors.appWhite}
            size={Fonts.size.large}
          />
          <AppButton
            style={styles.button}
            text={strings.home_payment_screen.list_duplicate.toUpperCase()}
            color={Colors.appWhite}
            size={Fonts.size.large}
          />
          <AppButton
            style={styles.button}
            text={strings.home_payment_screen.schedule.toUpperCase()}
            color={Colors.appWhite}
            size={Fonts.size.large}
          />
          <AppButton
            style={styles.button}
            text={strings.home_payment_screen.list_cut.toUpperCase()}
            color={Colors.appWhite}
            size={Fonts.size.large}
          />
        </View>
        <View style={styles.containerSync}>
          <AppText
            text={strings.home_payment_screen.not_sync}
            style={{marginBottom: Metrics.margin.large}}
            bold={true}
            size={Fonts.size.large}
          />
          <AppButton
            width={180}
            height={50}
            bgColor={'#9a9c9b'}
            text={strings.home_payment_screen.sync}
            color={Colors.appWhite}
            size={Fonts.size.large}
          />
        </View>
      </View>
    );
  }
}
