import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Colors, Fonts, Images, Metrics, Styles} from '../../../../../themes';
import Header from '../Header';
import ActionForm from '../ActionForm';
import strings from '../../../../../languages';
import {home_type} from '../../../../../helpers/Constants';
import {AppText} from '../../../../../components';

export default class Render extends Component {
  state = {
    type: 0,
  };

  render() {
    const {} = this.props;

    return (
      <View style={[Styles.container]}>
        <Header
          state={this.state.type}
          onPressChange={type => this.setState({type})}
        />
        <ActionForm
          data={[
            {
              title: strings.home_screen.calendar,
              description: strings.home_screen.customer,
              image: Images.icCalendar,
              onPress: () => this.props.onPressMenu(home_type.BOOKING),
            },
            {
              title: strings.home_screen.history,
              description: strings.home_screen.payment_customer,
              image: Images.icHistory,
              onPress: () => this.props.onPressMenu(0),
            },
            {
              title: strings.home_screen.update,
              description: strings.home_screen.info_customer,
              image: Images.icUser,
              onPress: () => this.props.onPressMenu(0),
            },
            {
              title: strings.home_screen.return,
              description: this.state.type,
              image: Images.icReturn,
              onPress: () => this.props.onPressMenu(0),
            },
          ]}
        />
        <View style={{padding: Metrics.margin.large}}>
          <TouchableOpacity
            activeOpacity={1}
            style={{borderRadius: Metrics.borderRadius.regular}}
            onPress={() => this.props.onPressMenu(home_type.HOME_PAYMENT)}>
            <FastImage
              source={Images.payment_home}
              style={{
                width: Metrics.screenWidth - Metrics.margin.large * 2,
                height: 100,
                borderRadius: Metrics.borderRadius.regular,
                ...Styles.center,
              }}>
              <AppText
                text={strings.home_screen.payment_home}
                color={Colors.appWhite}
                size={Fonts.size.h3}
                bold={true}
              />
            </FastImage>
          </TouchableOpacity>
        </View>
        <ActionForm
          data={[
            {
              title: strings.home_screen.payment,
              description: strings.home_screen.by_bank,
              image: Images.icPayment,
              onPress: () => this.props.onPressMenu(0),
            },
            {
              title: strings.home_screen.register,
              description: strings.home_screen.service,
              image: Images.icRegister,
              onPress: () => this.props.onPressMenu(0),
            },
            {
              title: strings.home_screen.contact,
              description: strings.home_screen.customer,
              image: Images.icContact,
              onPress: () => this.props.onPressMenu(0),
            },
            {
              title: strings.home_screen.partner,
              description: strings.home_screen.link,
              image: Images.icPartner,
              onPress: () => this.props.onPressMenu(0),
            },
          ]}
        />
      </View>
    );
  }
}
