import {
  IMAGE_LOADING,
  IMAGE_LOADING_SUCCESS,
  IMAGE_LOADING_FAILURE
} from "../actions/types";

const initialState = {
  loading: false,
  data: null,
  error: null
};

export const imageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case IMAGE_LOADING:
      return {
        ...state,
        loading: true
      };
    case IMAGE_LOADING_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload
      };
    case IMAGE_LOADING_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
