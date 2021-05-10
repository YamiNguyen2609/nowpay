import React, {Component} from 'react';
import {
  View,
  ViewProps,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';

import {Metrics, Colors} from '../themes';

export default class AppModal extends Component {
  _renderItem = ({item, index}) => (
    <TouchableOpacity
      key={index}
      onPress={item['onPress']}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 50,
      }}>
      {item['text']}
    </TouchableOpacity>
  );

  render() {
    const {header, body, footer, visible, horizontal} = this.props;

    return (
      <Modal
        isVisible={visible}
        style={style.modal}
        animationInTiming={250}
        animationIn="zoomInUp"
        animationOut="zoomOutUp"
        onBackdropPress={this.props.onBackProp}
        animationOutTiming={250}>
        <View style={style.container}>
          <View style={{width: Metrics.screenWidth}}>{header}</View>
          <View
            style={{
              flex: 1,
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.overlay5,
            }}>
            {body}
          </View>
          <FlatList
            data={footer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={horizontal}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index}
          />
        </View>
      </Modal>
    );
  }
}

const style = StyleSheet.create({
  modal: {
    margin: 0,
    padding: 0,
    paddingHorizontal: Metrics.margin.large,
  },
  container: {
    backgroundColor: Colors.appBackgroundGrayColor,
    borderRadius: Metrics.borderRadius.small,
    paddingTop: Metrics.margin.large,
  },
});
