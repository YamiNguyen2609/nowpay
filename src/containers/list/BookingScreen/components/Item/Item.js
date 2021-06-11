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
    const {states, index, item} = this.props;

    const {customerId, timeStart, timeEnd, amount, address, device} = item;

    let state = 0;
    let data = states.find((x) => x.device == index);
    if (data != null) state = data.state;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.onPressSubscribe(device, this.props.index)}>
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
          <AppText
            lines={1}
            style={{width: '100%', marginTop: Metrics.margin.small}}
            text={state ? 'Đang mở' : 'Đã tắt'}
            size={Fonts.size.large}
            color={state ? Colors.appGreen : Colors.appRed}
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
