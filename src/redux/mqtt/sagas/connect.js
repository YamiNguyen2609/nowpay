import MQTT from 'sp-react-native-mqtt';
import {mqtt} from '../../../helpers/Constants';

const onConnect = (config) => {
  console.log('config', config);
  return new Promise((reslove, reject) => {
    try {
      MQTT.createClient({
        protocol: 'mqtt',
        host: mqtt.host,
        port: mqtt.port,
        user: mqtt.username,
        pass: mqtt.password,
        auth: true,
        ...config,
      }).then(function (client) {
        reslove(client);
      });
    } catch (error) {
      reject(JSON.stringify(error));
    }
  });
};

export default {onConnect};
