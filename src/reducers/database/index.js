const initialState = {
  ask: {
    name: "",
    category: "",
    tel: "",
    email: "",
    number: 0,
    location: "서울",
    history: "예비사업자",
    content: "",
    agree: false,
  },
};

const database = (state = initialState, action) => {
  switch (action.type) {
    case "db/name":
      return {
        ...state,
        ask: {
          ...state.ask,
          name: action.payload,
        },
      };
    case "db/category":
      return {
        ...state,
        ask: {
          ...state.ask,
          category: action.payload,
        },
      };
    case "db/tel":
      return {
        ...state,
        ask: {
          ...state.ask,
          tel: action.payload,
        },
      };
    case "db/email":
      return {
        ...state,
        ask: {
          ...state.ask,
          email: action.payload,
        },
      };
    case "db/number":
      return {
        ...state,
        ask: {
          ...state.ask,
          number: action.payload,
        },
      };
    case "db/location":
      return {
        ...state,
        ask: {
          ...state.ask,
          location: action.payload,
        },
      };
    case "db/history":
      return {
        ...state,
        ask: {
          ...state.ask,
          history: action.payload,
        },
      };
    case "db/content":
      return {
        ...state,
        ask: {
          ...state.ask,
          content: action.payload,
        },
      };
    case "db/agree":
      return {
        ...state,
        ask: {
          ...state.ask,
          agree: action.payload,
        },
      };
    default:
      return state;
  }
};
export default database;
