import React, {Component} from 'react';
import {View, ViewProps} from 'react-native';
import {Colors} from '../themes';

export default class AppDivider extends Component {
  render() {
    const {
      width = '100%',
      height = 0.8,
      color = Colors.overlay5,
      style,
    } = this.props;

    return (
      <View
        style={[
          {
            width,
            height,
            backgroundColor: color,
          },
          style,
        ]}
      />
    );
  }
}
