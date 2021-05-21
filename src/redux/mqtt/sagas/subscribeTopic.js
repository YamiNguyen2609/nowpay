import {takeEvery, put} from 'redux-saga/effects';
import {showMessage} from 'react-native-flash-message';
import {store} from '../../ConfigureStore';

import mqtt from './connect';
import {ACTION, onSuccess, onFailure} from '../redux/subscribeTopic';

const bit = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F',
};

function* subscribeTopic(action) {
  try {
    const {state, deviceId, data} = action;
    let topic = '';

    console.log('state', state);

    switch (state) {
      case 0:
        yield getStatus(deviceId, data);
        break;

      case 1:
        yield getControl(deviceId, data);
        break;

      case 2:
        topic = '/boxctlevn/' + deviceId + '/fw_esp_4g';
        break;

      default:
        break;
    }
  } catch (error) {}
}

function* getStatus(deviceId, data) {
  let topic = '/boxctlevn/' + deviceId + '/status';

  var client = yield mqtt.onConnect({
    clientId: deviceId,
    keepalive: 86400,
  });

  client.connect();

  //   client.on('connect', () => {
  console.log('you are connected!!!!');
  client.subscribe(topic, 0);

  client.on('message', function (message) {
    let mess = JSON.parse(message.data.toString());

    store.dispatch(
      onSuccess({
        type: 0,
        index: data,
        data: {
          state: false,
          device: data,
        },
      }),
    );
    client.unsubscribe(topic);

    client.disconnect();
  });
}

function* getControl(deviceId, data) {
  topic = '/boxctlevn/' + deviceId + '/control';

  let hexPrase = '';

  for (let index = 0; index < data['value'].length; index += 4) {
    let value =
      Math.pow(2, 0) * data['value'][index] +
      Math.pow(2, 1) * data['value'][index + 1] +
      Math.pow(2, 2) * data['value'][index + 2] +
      Math.pow(2, 3) * data['value'][index + 3];

    hexPrase += bit[value];
  }

  let hex = '0x000000' + hexPrase;

  console.log('hexPrase', data['value'], hexPrase);

  var client = yield mqtt.onConnect({
    clientId: deviceId,
    keepalive: 86400,
  });

  client.connect();

  client.on('connect', () => {
    client.connect();
    console.log('you are connected!!!!');
    client.subscribe(topic, 0);

    client.publish(topic, '{"request": 300,"value": "' + hex + '"}', 0, false);

    client.unsubscribe(topic);

    client.disconnect();

    store.dispatch(
      onSuccess({
        type: 1,
        index: data['index'],
        data: {
          state: !data['state'],
          device: data['index'],
        },
      }),
    );
  });
}

export default function* saga() {
  yield takeEvery(ACTION, subscribeTopic);
}
