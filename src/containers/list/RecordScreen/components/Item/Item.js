import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import {Colors, Fonts, Images, Metrics} from '../../../../../themes';
import {AppText} from '../../../../../components';
import strings from '../../../../../languages';
import {formatCurrency} from '../../../../../helpers/Utils';

export default class Item extends Component {
  state = {};
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.containerInfo}>
          <View style={{flexDirection: 'row'}}>
            <AppText
              text={'0032373'}
              size={Fonts.size.large}
              color={Colors.appColor}
            />
            <AppText text={' | '} size={Fonts.size.large} />
            <AppText
              text={'08:30 - 09:30'}
              size={Fonts.size.large}
              color={Colors.appPrimaryColor}
              bold
            />
          </View>
          <AppText
            lines={1}
            style={{width: '100%', marginTop: Metrics.margin.small}}
            text={'234 Hoàng văn thụ'}
            bold={true}
            size={Fonts.size.h6}
          />
        </View>
        <View>
          <AppText
            text={strings.booking_screen.payment}
            size={Fonts.size.large}
            style={{marginBottom: Metrics.margin.small}}
            align={'right'}
          />
          <AppText
            bold={true}
            text={formatCurrency(1250000)}
            size={Fonts.size.h6}
            align={'right'}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
