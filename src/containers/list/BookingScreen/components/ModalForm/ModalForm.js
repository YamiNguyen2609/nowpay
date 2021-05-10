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
    const {visible, title, data} = this.props;
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

            <FlatList
              showsVerticalScrollIndicator={false}
              style={{width: '100%', height: '100%'}}
              data={data}
              ItemSeparatorComponent={() => (
                <AppDivider height={0.8} color={Colors.appLightGrayColor} />
              )}
              renderItem={({item, index}) => (
                <AppButton
                  onPress={() => this.props.onPress(item)}
                  width={'100%'}
                  //   height={35}
                  border={0}
                  text={item.text}
                  bgColor={'transparent'}
                  radius={0}
                  size={Fonts.size.h6}
                  bold={false}
                  style={{
                    paddingVertical: Metrics.margin.large,
                  }}
                  align={'center'}
                />
              )}
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
