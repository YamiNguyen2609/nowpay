import React, {Component} from 'react';
import {View, Animated} from 'react-native';
import FastImage from 'react-native-fast-image';

import {AppText} from '../../../../../components';
import styles from './styles';
import {Metrics, Images, Styles, Fonts, Colors} from '../../../../../themes';
import LoginView from '../LoginView';
import {version} from '../../../../../helpers/Constants';
import strings from '../../../../../languages';

export default class Render extends Component {
  state = {
    timer: new Animated.Value(0),
  };

  componentDidMount() {
    setTimeout(() => {
      Animated.timing(this.state.timer, {
        toValue: 5,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }, 100);
  }

  render() {
    const size = this.state.timer.interpolate({
      inputRange: [0, 5],
      outputRange: [Metrics.screenWidth / 2, 150],
      extrapolate: 'clamp',
    });
    const flexContainer = this.state.timer.interpolate({
      inputRange: [0, 5],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    const opacity = this.state.timer.interpolate({
      inputRange: [0, 5],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <FastImage source={Images.bgLogin} style={styles.container}>
        <View style={styles.version}>
          <AppText
            text={version}
            size={Fonts.size.small}
            color={Colors.appWhite}
          />
        </View>
        <Animated.View style={[Styles.center, styles.container]}>
          <Animated.View style={{width: size, height: size}}>
            <FastImage
              source={Images.logo}
              style={{
                flex: 1,
              }}
            />
          </Animated.View>
        </Animated.View>
        <Animated.View style={{flex: flexContainer, opacity}}>
          <LoginView onLogin={this.props.onPressLogin} />
        </Animated.View>
      </FastImage>
    );
  }
}
