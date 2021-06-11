import React, {Component} from 'react';
import {connect} from 'react-redux';

import Render from './components/Render';
import {subscribeTopic} from '../../../redux/mqtt/redux/subscribeTopic';

export class BookingScreen extends Component {
  state = {};
  render() {
    return <Render back={this.props.navigation.goBack} {...this.props} />;
  }
}

const mapStateToProp = (state) => ({
  flagTopic: state.subscribeTopic.flag,
  items: state.subscribeTopic.items,
  flagUpdate: state.subscribeTopic.flagUpdate,
});

const mapDispatchToProp = {
  subscribeTopic,
};

export default connect(mapStateToProp, mapDispatchToProp)(BookingScreen);
