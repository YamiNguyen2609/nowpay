import React, {Component} from 'react';
import {Easing, Animated} from 'react-native';
import {NavigationContainer, CommonActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import Home from '../containers/main/Home';
import LauncherScreen from '../containers/main/LauncherScreen';
import LoginScreen from '../containers/main/LoginScreen';
import HomePaymentScreen from '../containers/payment/HomePaymentScreen';
import BookingScreen from '../containers/list/BookingScreen';
import RecordScreen from '../containers/list/RecordScreen';

const screens = [
  {
    name: 'LauncherScreen',
    component: LauncherScreen,
  },
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
  },
  {
    name: 'HomePaymentScreen',
    component: HomePaymentScreen,
  },
  {
    name: 'BookingScreen',
    component: BookingScreen,
  },
  {
    name: 'RecordScreen',
    component: RecordScreen,
  },
];

const Stack = createStackNavigator();

let navigator = null;

export class RootNavigation extends Component {
  UNSAFE_componentWillReceiveProps = nextProps => {
    if (this.props.stack != nextProps.stack) {
      var routeName = nextProps.screen;
      var data = nextProps.data;

      navigator.dispatch(
        CommonActions.navigate({
          name: routeName,
          params: data,
        }),
      );
    }

    if (this.props.resetStack != nextProps.resetStack) {
      routeName = nextProps.screen;
      data = nextProps.data;

      navigator.reset({
        index: 0,
        routes: [{name: routeName, data}],
      });
    }

    if (this.props.removeStack != nextProps.removeStack) {
      var routeName = nextProps.screen;
      var data = nextProps.data;

      navigator.dispatch(
        CommonActions.navigate({
          name: routeName,
          params: data,
        }),
      );
    }
  };
  render() {
    return (
      <NavigationContainer
        ref={nav => {
          navigator = nav;
        }}>
        <Stack.Navigator
          // screenOptions={{
          //   headerShown: false,
          //   cardStyle: {backgroundColor: 'transparent'},
          //   cardOverlayEnabled: true,
          //   cardStyleInterpolator: ({current: {progress}}) => ({
          //     cardStyle: {
          //       transform: [
          //         {
          //           translateX: Animated.multiply(
          //             progress.interpolate({
          //               inputRange: [0, 1, 2],
          //               outputRange: [
          //                 screen.width, // Focused, but offscreen in the beginning
          //                 0, // Fully focused
          //                 screen.width * -0.3, // Fully unfocused
          //               ],
          //               extrapolate: 'clamp',
          //             }),
          //             inverted,
          //           ),
          //         },
          //       ],
          //       // opacity: progress.interpolate({
          //       //   inputRange: [0, 0.5, 0.75, 1],
          //       //   outputRange: [0, 0.25, 0.75, 1],
          //       // }),
          //     },
          //     overlayStyle: {
          //       opacity: progress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: [0, 0.5],
          //         extrapolate: 'clamp',
          //       }),
          //     },
          //   }),
          //}}
          headerMode={'none'}
          initialRouteName={'LoginScreen'}>
          {screens.map(e => {
            return (
              <Stack.Screen
                key={e.name}
                name={e.name}
                component={e.component}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    screen: state.navigation.screen,
    data: state.navigation.data,
    stack: state.navigation.stack,
    resetStack: state.navigation.resetStack,
    removeStack: state.navigation.removeStack,
  };
}
export default connect(mapStateToProps)(RootNavigation);
