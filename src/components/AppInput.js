import React, {Component} from 'react';
import {View, TextInput, ViewProps, ViewStyle} from 'react-native';
import {Metrics, Fonts, Colors} from '../themes';

export default class AppInput extends Component {
  state = {
    value: '',
  };

  _onChangeText = val => this.setState({value: val});

  clear = () => {
    this.input.current?.clear();
  };

  blur = () => {
    this.input.current?.blur();
  };

  focus = () => {
    this.input.current?.focus();
  };

  val = value => {
    if (value != undefined) {
      this.setState({value});
    } else {
      return this.state.value;
    }
  };

  render() {
    const {
      width,
      height,
      marginHorizontal,
      marginVertical,
      placeholder,
      placeholderColor = Colors.appLightGrayColor,
      textColor = Colors.appTextBlack,
      size = Fonts.size.regular,
      bgColor = 'transparent',
      style,
      border = 0.8,
      borderColor = Colors.appLightGrayColor,
      icon,
      radius = Metrics.borderRadius.small,
      password,
    } = this.props;

    return (
      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: Metrics.margin.small,
            borderWidth: border,
            borderColor: borderColor,
            marginHorizontal,
            marginVertical,
            backgroundColor: bgColor,
            width,
            height,
            borderRadius: radius,
          },
          style,
        ]}>
        <View style={{marginRight: Metrics.margin.small}}>{icon}</View>
        <TextInput
          ref={ip => (this.input = ip)}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          style={{color: textColor, fontSize: size, flex: 1}}
          onChangeText={this.props.onTextChange ?? this._onChangeText}
          secureTextEntry={password}
        />
      </View>
    );
  }
}
