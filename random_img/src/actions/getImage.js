import axios from "axios";
import keys from "../keys";
import {
  IMAGE_LOADING,
  IMAGE_LOADING_SUCCESS,
  IMAGE_LOADING_FAILURE
} from "../actions/types";

export const getImage = (baseUrl, query) => async dispatch => {
  dispatch({ type: IMAGE_LOADING });

  try {
    const res = await axios.get(
      `${baseUrl}/api/?key=${keys.images}&q=${query}`
    );
    console.log(res);
    dispatch({ type: IMAGE_LOADING_SUCCESS, payload: res.data });
  } catch (err) {
    console.error(err);
    dispatch({ type: IMAGE_LOADING_FAILURE, payload: err });
  }
};
