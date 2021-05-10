import React, {Component} from 'react';
import {connect} from 'react-redux';

import Render from './components/Render';

export class RecordScreen extends Component {
  state = {};
  render() {
    return <Render back={this.props.navigation.goBack} />;
  }
}

const mapStateToProp = state => ({});

const mapDispatchToProp = {};

export default connect(mapStateToProp, mapDispatchToProp)(RecordScreen);
