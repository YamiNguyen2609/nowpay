import React, {Component} from 'react';
import {AppState} from 'react-native';
import {connect} from 'react-redux';

import Render from './components/Render';

export class HomePaymentScreen extends Component {
  state = {
    state: false,
  };

  componentDidMount() {
    AppState.addEventListener('change', this._onChangeState);
  }

  _onChangeState = async nextAppState =>
    this.setState({state: nextAppState === 'active'});

  render() {
    return (
      <Render state={this.state.state} back={this.props.navigation.goBack} />
    );
  }
}

const mapStateToProp = state => ({});

const mapDispatchToProp = {};

export default connect(mapStateToProp, mapDispatchToProp)(HomePaymentScreen);
