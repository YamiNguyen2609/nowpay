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
        yield getStatus(deviceId);
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

function* getStatus(deviceId) {
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
        data: {
          state: true,
          device: deviceId,
        },
      }),
    );
    client.unsubscribe(topic);

    client.disconnect();
  });
}

function* getControl(deviceId, data) {
  console.log(deviceId, data);

  topic = '/boxctlevn/' + deviceId + '/control';

  var client = yield mqtt.onConnect({
    clientId: deviceId,
    keepalive: 86400,
  });

  client.connect();

  console.log('topic', topic);

  client.on('connect', () => {
    console.log('you are connected!!!!');
    client.subscribe(topic, 0);

    // data['value'] = '0x00000002';

    let index = data['index'];

    let state = data['state'];

    delete data['index'];
    delete data['state'];

    client.publish(topic, JSON.stringify(data), 0, false);

    store.dispatch(
      onSuccess({
        type: 1,
        index,
        data: {
          state: !state,
          device: deviceId,
        },
      }),
    );

    client.unsubscribe(topic);

    client.disconnect();
  });
}

export default function* saga() {
  yield takeEvery(ACTION, subscribeTopic);
}
