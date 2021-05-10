import React, {Component} from 'react';
import {connect} from 'react-redux';
import r from 'reactotron-react-native';

import Render from './components/Render';
import {home_type} from '../../../helpers/Constants';
import {replaceScreen} from '../../../redux/navigation';
import {flagTextMessage} from '../../../redux/app';

export class HomeScreen extends Component {
  _onPressMenu = (type, data) => {
    let screen = '';

    switch (type) {
      case home_type.HOME_PAYMENT:
        screen = 'HomePaymentScreen';
        break;

      case home_type.BOOKING:
        screen = 'BookingScreen';
        break;

      default:
        return this.props.flagTextMessage({
          message: 'Chức năng hiện đang trong quá trình phát triển',
        });
    }

    this.props.replaceScreen(screen, data);
  };

  render() {
    return <Render onPressMenu={this._onPressMenu} />;
  }
}

const mapStateToProp = state => ({});

const mapDispatchToProp = {
  replaceScreen,
  flagTextMessage,
};

export default connect(mapStateToProp, mapDispatchToProp)(HomeScreen);
