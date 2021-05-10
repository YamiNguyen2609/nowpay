import React, {Component} from 'react';
import {View, ViewStyle} from 'react-native';
import {DotIndicator} from 'react-native-indicators';
import {Colors, Styles} from '../themes';

export default class AppIndicator extends Component {
  render() {
    const {
      visible,
      size = 18,
      bgColor = 'transparent',
      color = Colors.appColor,
      number = 3,
      style,
    } = this.props;

    return visible ? (
      <View
        style={[
          style,
          {
            ...Styles.center,
            backgroundColor: bgColor,
            position: 'absolute',
            zIndex: 999,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
        ]}>
        <View
          style={{
            // backgroundColor: Colors.overlay1,
            width: 70,
            height: 70,
            borderRadius: 8,
          }}>
          <DotIndicator color={color} size={size} count={number} />
        </View>
      </View>
    ) : null;
  }
}
