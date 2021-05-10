import React, {Component} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import {Colors, Fonts, Metrics} from '../../../../../themes';
import {AppDivider, AppText} from '../../../../../components';
import strings from '../../../../../languages';

export default class ActionForm extends Component {
  state = {};
  render() {
    const {data} = this.props;
    return (
      <View>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={item => <Item {...item} />}
          ItemSeparatorComponent={() => (
            <AppDivider height={Metrics.margin.small} color={'transparent'} />
          )}
        />
      </View>
    );
  }
}

class Item extends Component {
  render() {
    const {item, index} = this.props;
    let {title, description, image, onPress} = item;

    const color = '#3b4b67';

    switch (description) {
      case 0:
        description = strings.home_screen.amount_light;
        break;
      case 1:
        description = strings.home_screen.amount_water;
        break;
      case 2:
        description = strings.home_screen.amount_gas;
        break;

      default:
        break;
    }

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[
          styles.item,
          index % 2 == 0
            ? {marginRight: Metrics.margin.small / 2}
            : {marginLeft: Metrics.margin.small / 2},
        ]}>
        <View
          style={{
            width: 40,
            height: 40,
          }}>
          <FastImage source={image} style={{flex: 1}} />
        </View>
        <View
          style={{
            flex: 0.9,
            marginLeft: Metrics.margin.regular,
            height: '100%',
            flexDirection: 'column',
          }}>
          <AppText
            text={title}
            bold={true}
            size={Fonts.size.large}
            style={{flex: 1}}
            color={color}
          />
          <AppText
            text={description}
            style={{marginLeft: Metrics.margin.tiny, flex: 1}}
            color={color}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
