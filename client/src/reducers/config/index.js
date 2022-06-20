import * as actions from "../actions";

const initialState = {
  data: {},
  status: "test",
  payload: "",
  isLoading: false,
  isPopup: {
    state: false,
    type: "",
  },
  isToast: {
    state: false,
    msg: "",
  },
};

const config = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH:
      return {
        ...state,
        payload: action.payload,
      };
    case actions.SEARCH_SUCCESS:
      return {
        ...state,
        status: action.data,
      };
    case actions.SEARCH_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case "config/isPopup":
      return {
        ...state,
        isPopup: action.payload,
      };
    case "config/toast":
      return {
        ...state,
        isToast: action.payload,
      };
    default:
      return state;
  }
};
export default config;
