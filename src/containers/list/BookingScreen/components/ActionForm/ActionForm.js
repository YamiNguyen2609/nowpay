import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';
import {Colors, Fonts, Metrics, Styles} from '../../../../../themes';
import {AppButton, AppDivider, AppText} from '../../../../../components';
import strings from '../../../../../languages';

export default class ModalForm extends Component {
  state = {};
  render() {
    const {visible, state, title} = this.props;
    return (
      <Modal
        onBackdropPress={this.props.onClose}
        isVisible={visible}
        style={Styles.modal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingHorizontal: Metrics.margin.regular,
          }}>
          <View style={styles.container}>
            <AppText
              text={title}
              bold={true}
              style={{paddingVertical: Metrics.margin.regular}}
            />
            <AppDivider height={0.8} color={Colors.appLightGrayColor} />

            <AppButton
              onPress={() => {}}
              width={'100%'}
              //   height={35}
              border={0}
              text={'Đã thu'}
              bgColor={'transparent'}
              radius={0}
              size={Fonts.size.h6}
              bold={true}
              style={{
                paddingVertical: Metrics.margin.large,
              }}
              align={'center'}
            />
            <AppDivider height={0.8} color={Colors.appLightGrayColor} />
            <AppButton
              onPress={this.props.onPress}
              width={'100%'}
              //   height={35}
              border={0}
              text={state ? 'Ngắt điện' : 'Mở điện'}
              bgColor={'transparent'}
              radius={0}
              size={Fonts.size.h6}
              bold={true}
              style={{
                paddingVertical: Metrics.margin.large,
              }}
              align={'center'}
            />
          </View>
          <AppButton
            onPress={this.props.onClose}
            text={strings.common.close}
            bgColor={Colors.appWhite}
            radius={Metrics.borderRadius.large}
            size={Fonts.size.h6}
            color={Colors.appPrimaryColor}
            style={{
              paddingVertical: Metrics.margin.large,
              marginVertical: Metrics.margin.large,
            }}
          />
        </View>
      </Modal>
    );
  }
}
