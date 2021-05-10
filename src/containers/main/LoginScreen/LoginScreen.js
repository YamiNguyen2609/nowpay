import React, {Component} from 'react';
import {connect} from 'react-redux';
import r from 'reactotron-react-native';
import FastImage from 'react-native-fast-image';

import Render from './components/Render';
import {loginUser} from '../../../redux/user/redux/loginUser';
import {NavigationProp} from '@react-navigation/native';
import {Images, Styles, Metrics} from '../../../themes';

export class LoginScreen extends Component {
  state = {
    phoneNumber: '',
    loginPhone: null,
    isChange: false,
  };

  componentDidMount = () => {
    setTimeout(() => this.setState({isChange: true}), 1500);
  };

  UNSAFE_componentWillReceiveProps = nextProps => {
    if (this.props.successStack != nextProps.successStack) {
      this.props.navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }
  };

  validatePhoneNumber = phone => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/;
    return regexp.test(phone);
  };

  render() {
    const size = Metrics.screenWidth / 2;

    return !this.state.isChange ? (
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
    ) : (
      <Render
        onPressLogin={this.props.loginUser}
        {...this.props.route.params}
      />
    );
  }
}

const mapStateToProp = state => ({
  successStack: state.loginUser.successStack,
});

const mapDispatchToProp = {
  loginUser,
};

export default connect(mapStateToProp, mapDispatchToProp)(LoginScreen);
