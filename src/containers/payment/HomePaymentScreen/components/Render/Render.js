import React, {Component} from 'react';
import {View} from 'react-native';

import {Styles} from '../../../../../themes';
import Header from '../Header';
import ActionForm from '../ActionForm';

export default class Render extends Component {
  state = {};
  render() {
    const {state} = this.props;
    return (
      <View style={Styles.container}>
        <Header cashier={100} state={state} back={this.props.back} />
        <ActionForm />
      </View>
    );
  }
}
