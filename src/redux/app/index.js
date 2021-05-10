const FLAG_INDICATOR = 'FLAG_INDICATOR';

const FLAG_TEXT_MESSAGE = 'FLAG_TEXT_MESSAGE';

const SHOW_FLAG_MESSAGE = 'SHOW_FLAG_MESSAGE';

const HIDE_FLAG_MESSAGE = 'HIDE_FLAG_MESSAGE';

const flagIndicator = (status, params = null) => ({
  type: FLAG_INDICATOR,
  status,
  params,
});

const flagTextMessage = params => ({
  type: FLAG_TEXT_MESSAGE,
  params,
});

const showFlagMessage = params => ({
  type: SHOW_FLAG_MESSAGE,
  params,
});

const hideFlagMessage = () => ({
  type: HIDE_FLAG_MESSAGE,
});

const initialState = {
  flagIndicator: false,
  colorIndicator: '',
  textMessage: {
    message: '',
    time: 5000,
    flag: 0,
  },
  flagMessage: {
    title: '',
    message: '',
    buttons: [],
    flag: false,
    item: undefined,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FLAG_INDICATOR:
      if (action.status) {
        return {
          ...state,
          colorIndicator: action.params.color,
          flagIndicator: action.status,
        };
      } else {
        return {
          ...state,
          flagIndicator: action.status,
        };
      }

    case FLAG_TEXT_MESSAGE:
      return {
        ...state,
        textMessage: {
          ...state.textMessage,
          message: action.params.message,
          flag: state.textMessage.flag + 1,
        },
      };

    case SHOW_FLAG_MESSAGE:
      return {
        ...state,
        flagMessage: {
          title: action.params.title ? action.params.title : 'Thông báo',
          message: action.params.message,
          buttons: action.params.buttons,
          item: action.params.item,
          flag: true,
        },
      };

    case HIDE_FLAG_MESSAGE:
      return {
        ...state,
        flagMessage: {
          title: '',
          message: '',
          buttons: [],
          flag: false,
          item: undefined,
        },
      };

    default:
      return {...state};
  }
};

export {flagIndicator, flagTextMessage, hideFlagMessage, showFlagMessage};
