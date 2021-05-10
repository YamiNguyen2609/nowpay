import React, {Component} from 'react';
import {View, Animated} from 'react-native';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

import {Styles, Images, Metrics, Colors, Fonts} from '../../../themes';
import strings from '../../../languages';
import {AppText} from '../../../components';
import {replaceScreen} from '../../../redux/navigation';

export class LauncherScreen extends Component {
  state = {
    timer: new Animated.Value(0),
    countTimer: 0,
  };

  componentDidMount() {
    this._navigateScreen();
  }

  _navigateScreen = () => {
    setTimeout(() => {
      this.props.navigation.reset({
        index: 0,
        // routes: [{name: this.props.user ? 'Home' : 'LoginScreen'}],
        routes: [{name: 'LoginScreen'}],
      });
    }, 1000);
  };

  render() {
    const size = Metrics.screenWidth / 2;

    return (
      <FastImage
        source={Images.bgLauncher}
        style={[Styles.container, Styles.center]}>
        <FastImage
          source={Images.logo}
          style={{
            width: size,
            height: size,
          }}
        />
      </FastImage>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginUser.user,
  };
};

const mapDispatchToProps = {
  replaceScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(LauncherScreen);
