import React, {Component} from 'react';
import {
  TouchableOpacity,
  ViewProps,
  ViewStyle,
  Platform,
  View,
} from 'react-native';
import {Metrics, Colors, Fonts} from '../themes';
import AppText from './AppText';

export default class AppButton extends Component {
  _onPress = data => {
    if (this.state.isPress) {
      this.setState({isPress: false}, () => {
        if (this.props.onPress) this.props.onPress(data);
        setTimeout(() => {
          this.setState({isPress: true});
        }, 300);
      });
    }
  };

  state = {isPress: true};
  render() {
    const {
      width,
      height,
      color = Colors.appTextBlack,
      size = Fonts.size.regular,
      align = 'center',
      bgColor,
      border = 0.8,
      borderColor = Colors.appLightGrayColor,
      radius = Metrics.borderRadius.small,
      view,
      text,
      hitSlop = {left: 5, right: 5, bottom: 5, top: 5},
      disabled,
      opacity = 0.8,
      style,
      textStyle,
      bold = true,
    } = this.props;

    return (
      <TouchableOpacity
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: bgColor,
            borderWidth: border,
            borderRadius: radius,
            width,
            height,
            borderColor,
          },
          style,
        ]}
        disabled={disabled}
        activeOpacity={opacity}
        hitSlop={hitSlop}
        onPress={this._onPress}>
        {text != undefined ? (
          <View style={[{flex: 1, justifyContent: 'center'}, textStyle]}>
            <AppText
              bold={bold}
              color={color}
              size={size}
              text={text}
              align={align}
            />
          </View>
        ) : (
          view
        )}
      </TouchableOpacity>
    );
  }
}
