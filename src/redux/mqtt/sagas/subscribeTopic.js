import {takeEvery, put} from 'redux-saga/effects';
import {showMessage} from 'react-native-flash-message';
import {store} from '../../ConfigureStore';

import mqtt from './connect';
import {ACTION, onSuccess, onFailure} from '../redux/subscribeTopic';

const bit = {
  '0000': '0',
  '0001': '1',
  '0010': '2',
  '0011': '3',
  '0100': '4',
  '0101': '5',
  '0110': '6',
  '0111': '7',
  1000: '8',
  1001: '9',
  1010: 'A',
  1011: 'B',
  1100: 'C',
  1101: 'D',
  1110: 'E',
  1111: 'F',
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

  console.log(
    'hexPrase1',
    data['value'],
    String(data['value'].substring(3, 4)),
  );

  for (let index = 0; index < data['value'].length; index += 4) {
    console.log(index, data['value'].substring(index, index + 4));
    hexPrase += bit[data['value'].substring(index, index + 4)];
  }

  let hex = '0x000000' + hexPrase;

  var client = yield mqtt.onConnect({
    clientId: deviceId,
    keepalive: 86400,
  });

  client.connect();

  client.on('connect', () => {
    client.connect();
    console.log('you are connected!!!!');
    client.subscribe(topic, 0);

    client.publish(
      topic,
      JSON.stringify({
        request: 300,
        value: hex,
        bit: data['value'],
      }),
      0,
      false,
    );

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
