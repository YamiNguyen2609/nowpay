import React, {Component} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import styles from './styles';
import {Colors, Fonts, Metrics, Styles} from '../../../../../themes';
import Header from '../Header';
import Item from '../Item';
import {AppDivider, AppText, AppCalendar} from '../../../../../components';
import ModalForm from '../ModalForm';
import ActionForm from '../ActionForm';
import strings from '../../../../../languages';
import Data from '../../../../../test';

export default class Render extends Component {
  state = {
    city: {
      id: 0,
      text: 'Tất cả',
    },
    district: {
      id: 0,
      text: 'Tất cả',
    },
    ward: {
      id: 0,
      text: 'Tất cả',
    },
    isPopup: false,
    titlePopup: '',
    dateStart: moment().format('YYYY-MM-DD'),
    dateEnd: moment().format('YYYY-MM-DD'),
    stateDate: '',
    isPopupDate: false,
    type: '',
    cities: [
      {
        id: 0,
        text: 'Tất cả',
      },
    ].concat(Data.countries.response),
    flagDevice: 0,
    isActionForm: false,
    index: 0,
    deviceId: '',
    device: {
      state: false,
      device: '',
      id: 0,
    },
  };

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if (this.props.flagDevice != nextProps.flagTopic) {
      let device = nextProps.items.find((x) => x.device == this.state.index);
      this.setState({
        flagDevice: nextProps.flagDevice,
        isActionForm: true,
        device,
      });
    }
  };

  onPressSelect = (titlePopup, type) =>
    this.setState({isPopup: true, titlePopup, type});

  onPressSubscribe = (item, index) =>
    this.setState({titlePopup: item, deviceId: item, index}, () =>
      this.props.subscribeTopic(item, 0, index),
    );

  render() {
    let day = '';

    switch (moment().day()) {
      case 1:
        day = 'Thứ hai';
        break;
      case 2:
        day = 'Thứ ba';
        break;
      case 3:
        day = 'Thứ tư';
        break;
      case 4:
        day = 'Thứ năm';
        break;
      case 5:
        day = 'Thứ sáu';
        break;
      case 6:
        day = 'Thứ bảy';
        break;
      case 7:
        day = 'Chủ nhật';
        break;
    }

    console.log('index', this.state.index);

    return (
      <View style={Styles.container}>
        <Header back={this.props.back} />
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.onPressSelect(strings.booking_screen.city, 'cities')
            }>
            <AppText text={this.state.city.text} />
            <IonIcon name={'ios-caret-down-outline'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.onPressSelect(strings.booking_screen.district, 'districts')
            }>
            <AppText text={this.state.district.text} />
            <IonIcon name={'ios-caret-down-outline'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.onPressSelect(strings.booking_screen.ward, 'wards')
            }>
            <AppText text={this.state.ward.text} />
            <IonIcon name={'ios-caret-down-outline'} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.setState({isPopupDate: true, stateDate: 'dateStart'})
            }>
            <AppText text={moment(this.state.dateStart).format('DD/MM/YYYY')} />
            <IonIcon
              name={'ios-calendar-sharp'}
              color={Colors.appLightGrayColor}
              size={Fonts.size.h5}
            />
          </TouchableOpacity>
          <View style={Styles.center}>
            <AppText
              text={day + ' ' + moment().format('DD/MM')}
              bold
              color={Colors.appColor}
              size={Fonts.size.large}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.setState({isPopupDate: true, stateDate: 'dateEnd'})
            }>
            <AppText text={moment(this.state.dateEnd).format('DD/MM/YYYY')} />
            <IonIcon
              name={'ios-calendar-sharp'}
              color={Colors.appLightGrayColor}
              size={Fonts.size.h5}
            />
          </TouchableOpacity>
        </View>
        <AppDivider height={10} color={Colors.appLightGrayColor} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data.schedule.response}
          renderItem={(item) => (
            <Item {...item} onPressSubscribe={this.onPressSubscribe} />
          )}
          ItemSeparatorComponent={() => (
            <AppDivider height={10} color={Colors.appLightGrayColor} />
          )}
        />
        <AppCalendar
          visible={this.state.isPopupDate}
          dateSelect={this.state[this.state.stateDate]}
          onClose={() => this.setState({isPopupDate: false})}
          onSelectDate={(day) =>
            this.setState({
              [this.state.stateDate]: day['dateString'],
              isPopupDate: false,
            })
          }
        />
        <ModalForm
          visible={this.state.isPopup}
          title={this.state.titlePopup}
          onPress={(city) => this.setState({isPopup: false, city})}
          onClose={() => this.setState({isPopup: false, titlePopup: ''})}
          data={this.state[this.state.type]}
        />
        <ActionForm
          state={this.state.device.state}
          title={this.state.titlePopup}
          visible={this.state.isActionForm}
          onPress={() =>
            this.setState({isActionForm: false, titlePopup: ''}, () =>
              this.props.subscribeTopic(this.state.deviceId, 1, {
                index: this.state.device.id,
                state: this.state.device.state,
                request: '300',
                value: Data.schedule.response
                  .map((item, index) => {
                    var data = this.props.items.find((x) => x.device == index);
                    if (data != null)
                      if (index == this.state.index) return data.state ? 0 : 1;
                      else return data.state ? 1 : 0;
                    else return 0;
                  })
                  .join(''),
              }),
            )
          }
          onClose={() => this.setState({isActionForm: false, titlePopup: ''})}
        />
      </View>
    );
  }
}
