import {takeEvery, put} from 'redux-saga/effects';
import {showMessage} from 'react-native-flash-message';
import {store} from '../../ConfigureStore';

import mqtt from './connect';
import {ACTION, onSuccess, onFailure} from '../redux/subscribeTopic';

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
          state: true,
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

  let hex = '0x000000' + parseInt(data['value'], 2).toString(16).toUpperCase();

  console.log(data['index'], data['value']);

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
