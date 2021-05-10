import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FastImage from 'react-native-fast-image';

import {store} from '../redux/ConfigureStore';
import {Images, Colors, Metrics} from '../themes';
import HomeScreen from '../containers/main/HomeScreen';
import {iPhoneHelper} from '../themes';

const screens = [
  {
    name: 'Trang chủ',
    id: 'Home',
    component: HomeScreen,
  },
  {
    name: 'Khách hàng',
    id: 'customer',
    component: HomeScreen,
  },
  {
    name: 'Cài đặt',
    id: 'user',
    component: HomeScreen,
  },
];

const Tab = createBottomTabNavigator();

export class TabNavigation extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <FastImage
          source={Images.bgTab}
          style={{
            width: Metrics.screenWidth,
            height: iPhoneHelper.isIPhoneX() ? 85 : 60,
            borderTopWidth: 0,
            justifyContent: 'center',
            position: 'absolute',
            bottom: -5,
          }}
        />
        <Tab.Navigator
          initialRouteName={'Trang chủ'}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              switch (route.params.id) {
                case 'Home':
                  iconName = Images.icHome;
                  break;
                case 'customer':
                  iconName = Images.icCustomer;
                  break;
                case 'user':
                  iconName = Images.icSetting;
                  break;
              }

              return (
                <FastImage source={iconName} style={{width: 25, height: 25}} />
              );
            },
          })}
          tabBarOptions={{
            showLabel: true,
            activeTintColor: Colors.appWhite,
            inactiveTintColor: Colors.appWhite,
            style: {
              paddingTop: Metrics.margin.small,
              height: iPhoneHelper.isIPhoneX() ? 85 : 60,
              width: Metrics.screenWidth,
              borderTopWidth: 0,
              justifyContent: 'center',
              backgroundColor: 'transparent',
              elevation: 0,
            },
          }}>
          {screens.map(e => {
            return (
              <Tab.Screen
                key={e.id}
                name={e.name}
                component={e.component}
                initialParams={{id: e.id}}
              />
            );
          })}
        </Tab.Navigator>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProp = {};

export default connect(mapStateToProps, mapDispatchToProp)(TabNavigation);
