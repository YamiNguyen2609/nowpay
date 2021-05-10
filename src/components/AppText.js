import React, {Component} from 'react';
import {Text, View, ViewProps, ViewStyle} from 'react-native';

import {Colors, Fonts} from '../themes';

export default class AppText extends Component {
  render() {
    const {
      text,
      lines,
      marginHorizontal = 0,
      marginVertical = 0,
      bgColor = 'transparent',
      color = Colors.appTextBlack,
      size,
      fontFamily,
      bold,
      italic,
      align = 'left',
      style,
    } = this.props;
    return (
      <View
        style={[
          {
            marginHorizontal,
            marginVertical,
            backgroundColor: bgColor,
          },
          style,
        ]}>
        <Text
          numberOfLines={lines}
          style={{
            color,
            fontFamily: fontFamily,
            fontSize: size,
            fontWeight: bold ? 'bold' : '200',
            fontStyle: italic ? 'italic' : 'normal',
            textAlign: align,
          }}>
          {text}
        </Text>
      </View>
    );
  }
}
