import Environment from '../config/BuildConfig';

const version =
  'Version' + (Environment !== 'PRODUCTION' ? '-test' : '') + ': 1.0.0';

const home_type = {
  BOOKING: 1,
  HISTORY: 2,
  UPDATE: 3,
  RETURN: 4,
  HOME_PAYMENT: 5,
  BANKING_PAYMENT: 6,
  REGISTER: 7,
  CONTACT: 8,
  PARTNER: 9,
};

const list_type = {
  print_receipt: 1,
  print_summary: 2,
  list_recorded: 3,
  list_duplicate: 4,
  schedule: 5,
  list_cut: 6,
};

const mqtt = {
  host: 'evnmqtt.tapay.vn',
  port: 6863,
  username: 'boxctlevn',
  password: 'boxctlevnTP111',
};

export {version, home_type, list_type, mqtt};
