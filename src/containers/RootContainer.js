import React, {Component} from 'react';
import {View, StatusBar, SafeAreaView, Platform} from 'react-native';
import {connect} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import RootNavigation from '../navigation/RootNavigation';
import {Styles} from '../themes';
import {AppMessage, AppIndicator, AppAlert} from '../components';
import {showFlagMessage, hideFlagMessage} from '../redux/app';

export class RootContainer extends Component {
  state = {
    flagIndicator: false,
    isUpdateState: true,
    flagMessage: false,
    flagTextMessage: 0,
  };

  UNSAFE_componentWillReceiveProps = nextProp => {
    if (this.state.flagIndicator != nextProp.flagIndicator) {
      this.setState({flagIndicator: nextProp.flagIndicator});
    }
    if (this.state.flagMessage != nextProp.flagMessage.flag) {
      this.setState({flagMessage: nextProp.flagMessage.flag});
    }
    if (this.state.flagTextMessage != nextProp.textMessage.flag) {
      this.setState({flagTextMessage: nextProp.textMessage.flag});
    }
  };
  render() {
    const {textMessage, flagMessage} = this.props;
    const {flagIndicator, flagTextMessage} = this.state;

    return (
      <View style={Styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        {Platform.OS == 'android' ? (
          <SafeAreaView style={{backgroundColor: 'transparent'}} />
        ) : null}
        <RootNavigation />
        <FlashMessage position="top" />
        <AppMessage
          visible={flagTextMessage}
          text={textMessage.message}
          time={textMessage.time}
        />
        <AppIndicator visible={flagIndicator} />
        <AppAlert
          horizontal={true}
          visible={flagMessage.flag}
          title={flagMessage.title}
          align={'center'}
          description={flagMessage.message}
          renderItem={flagMessage.item}
          renderButton={flagMessage.buttons}
        />
      </View>
    );
  }
}

const mapStateToProp = state => ({
  flagIndicator: state.app.flagIndicator,
  textMessage: state.app.textMessage,
  flagMessage: state.app.flagMessage,
});

const mapDispatchToProp = {
  showFlagMessage,
  hideFlagMessage,
};

export default connect(mapStateToProp, mapDispatchToProp)(RootContainer);
