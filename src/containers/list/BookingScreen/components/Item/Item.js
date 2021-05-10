import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import moment from 'moment';

import styles from './styles';
import {Colors, Fonts, Images, Metrics} from '../../../../../themes';
import {AppText} from '../../../../../components';
import strings from '../../../../../languages';
import {formatCurrency} from '../../../../../helpers/Utils';

export default class Item extends Component {
  state = {};
  render() {
    const {
      customerId,
      timeStart,
      timeEnd,
      amount,
      address,
      device,
    } = this.props.item;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.onPressSubscribe(device)}>
        <View style={styles.containerInfo}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AppText
              text={customerId}
              size={Fonts.size.large}
              color={Colors.appColor}
            />
            <AppText text={' | '} size={Fonts.size.large} />
            <AppText
              text={
                moment(timeStart).format('HH:mm') +
                ' - ' +
                moment(timeEnd).format('HH:mm')
              }
              size={Fonts.size.large}
              color={Colors.appPrimaryColor}
              bold
            />
          </View>
          <AppText
            lines={1}
            style={{width: '100%', marginTop: Metrics.margin.small}}
            text={address}
            bold={true}
            size={Fonts.size.large}
          />
        </View>
        <View>
          <AppText
            text={strings.booking_screen.payment.replace('{}', 'điện')}
            size={Fonts.size.large}
            style={{marginBottom: Metrics.margin.small}}
            align={'right'}
          />
          <AppText
            bold={true}
            text={formatCurrency(amount)}
            size={Fonts.size.large}
            align={'right'}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
