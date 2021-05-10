import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import TabNavigation from '../../../navigation/TabNavigation';

export class Home extends Component {
  UNSAFE_componentWillReceiveProps = nextProps => {
    if (this.props.user != nextProps.user && !nextProps.user) {
      this.props.navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
    }
  };

  render() {
    return <TabNavigation />;
  }
}

const mapStateToProp = state => ({
  user: state.loginUser.user,
});

const mapDispatchToProp = {};

export default connect(mapStateToProp, mapDispatchToProp)(Home);
