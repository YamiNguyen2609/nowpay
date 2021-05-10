import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import {Colors, Metrics} from '../themes';
import {AppText, AppButton, AppDivider} from '.';

export default class AppAlert extends Component {
  state = {};
  render() {
    const {
      visible,
      title,
      align,
      description,
      renderItem,
      renderButton,
      horizontal,
    } = this.props;

    return (
      <Modal
        isVisible={visible}
        style={styles.modal}
        animationInTiming={250}
        animationIn="zoomInUp"
        animationOut="zoomOutUp"
        onBackdropPress={this.props.onBackProp}
        animationOutTiming={250}>
        <View style={styles.container}>
          {title ? <AppText bold text={title} align="center" /> : null}
          {description ? (
            <AppText text={description} align={align ? align : 'left'} />
          ) : null}
          {renderItem ?? null}
          <FlatList
            data={renderButton}
            horizontal={horizontal}
            renderItem={({item}) => {
              return (
                <AppButton
                  style={styles.button}
                  onPress={item.onPress}
                  radius={0}
                  width={
                    (Metrics.screenWidth - Metrics.margin.regular * 2) /
                    renderButton.length
                  }
                  renderItem={() => <AppText text={item.title} />}
                />
              );
            }}
            ItemSeparatorComponent={() => {
              return horizontal ? (
                <AppDivider width={0.8} color={Colors.overlay2} />
              ) : (
                <AppDivider height={0.8} color={Colors.overlay2} />
              );
            }}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    padding: 0,
    paddingHorizontal: Metrics.margin.regular,
  },
  container: {
    backgroundColor: Colors.appBackgroundGrayColor,
    borderRadius: Metrics.borderRadius.regular,
    paddingTop: Metrics.margin.large,
  },
  button: {
    paddingVertical: Metrics.margin.regular,
    borderTopColor: Colors.overlay2,
    borderTopWidth: 0.8,
  },
});
