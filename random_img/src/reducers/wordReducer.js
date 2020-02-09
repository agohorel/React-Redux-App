import {
  WORD_LOADING,
  WORD_LOADING_SUCCESS,
  WORD_LOADING_FAILURE
} from "../actions/types";

const initialState = {
  loading: false,
  data: null,
  error: null
};

export const wordReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case WORD_LOADING:
      return {
        ...state,
        loading: true
      };
    case WORD_LOADING_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload
      };
    case WORD_LOADING_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
