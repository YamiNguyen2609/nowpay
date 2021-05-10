import React, {Component} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import IonIcon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import {Fonts, Metrics, Styles} from '../themes';
import {Colors} from '../themes';

LocaleConfig.locales['vi'] = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  monthNamesShort: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ],
  dayNames: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
  dayNamesShort: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
  today: '',
};

LocaleConfig.defaultLocale = 'vi';

export default class AppCalendar extends Component {
  state = {};
  render() {
    let {visible, dateSelect, minDate, maxDate} = this.props;

    let defaultDate =
      dateSelect != '' && dateSelect != null && dateSelect != undefined
        ? dateSelect
        : moment().format('YYYY-MM-DD');

    return (
      <Modal
        onBackdropPress={this.props.onClose}
        isVisible={visible}
        style={[Styles.modal, {paddingHorizontal: Metrics.margin.regular}]}>
        <Calendar
          style={{
            borderRadius: Metrics.borderRadius.regular,
            paddingBottom: Metrics.margin.regular,
          }}
          firstDay={0}
          enableSwipeMonths={true}
          current={defaultDate}
          onDayPress={this.props.onSelectDate}
          markedDates={{
            [defaultDate]: {selected: true},
          }}
          renderArrow={direction => (
            <IonIcon
              name={
                direction == 'left'
                  ? 'ios-chevron-back-outline'
                  : 'ios-chevron-forward-outline'
              }
              size={Fonts.size.h5}
              color={Colors.appPrimaryColor}
            />
          )}
          {...this.props}
        />
      </Modal>
    );
  }
}
