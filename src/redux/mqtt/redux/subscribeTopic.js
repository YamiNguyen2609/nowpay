const ACTION = 'SUBSCRIBE_TOPIC';
const ACTION_SUCCESS = ACTION + '_SUCCESS';
const ACTION_ERROR = ACTION + '_ERROR';

const subscribeTopic = (deviceId, state, data) => ({
  type: ACTION,
  deviceId,
  state,
  data,
});

const onSuccess = (payload) => ({
  type: ACTION_SUCCESS,
  payload,
});

const onFailure = (error) => ({
  type: ACTION_ERROR,
  error,
});

export {ACTION, subscribeTopic, onSuccess, onFailure};

const initialState = {
  flag: 0,
  value: '',
  state: 0,
  items: [],
};

export default (state = initialState, action) => {
  switch (action['type']) {
    case ACTION:
      return {...state};

    case ACTION_SUCCESS:
      const {type, data, index} = action['payload'];

      if (type == 0) {
        state['flag'] += 1;
        if (
          state['items'].filter((x) => x.device == data['device']).length == 0
        )
          state['items'] = state['items'].concat([
            {
              id: state['items'].length,
              device: data['device'],
              state: data['state'],
            },
          ]);
      } else if (type == 1) {
        state['items'][index]['state'] = data['state'];
      }

      return {...state};

    case ACTION_ERROR:
      state['flag'] += 1;

      return {...state};

    default:
      return state;
  }
};
