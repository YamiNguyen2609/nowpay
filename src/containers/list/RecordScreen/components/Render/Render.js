import React, {Component} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import styles from './styles';
import {Colors, Fonts, Metrics, Styles} from '../../../../../themes';
import {AppDivider, AppText, AppCalendar} from '../../../../../components';
import strings from '../../../../../languages';
import Header from '../Header';
import Item from '../Item';

export default class Render extends Component {
  state = {
    city: {
      id: 0,
      text: 'Tất cả',
    },
    isPopup: false,
    titlePopup: '',
    dateStart: moment().format('YYYY-MM-DD'),
    dateEnd: moment().format('YYYY-MM-DD'),
    stateDate: '',
    isPopupDate: false,
  };

  onPressSelect = titlePopup => this.setState({isPopup: true, titlePopup});

  render() {
    return (
      <View style={Styles.container}>
        <Header back={this.props.back} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={item => <Item {...item} />}
          ItemSeparatorComponent={() => (
            <AppDivider height={10} color={Colors.appLightGrayColor} />
          )}
        />
      </View>
    );
  }
}
