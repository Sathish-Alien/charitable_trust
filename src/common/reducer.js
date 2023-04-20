import { Types } from ".";

const initialState = {
  lang: true
};

const setLangReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

export default setLangReducer;