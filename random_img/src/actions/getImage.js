import axios from "axios";
import keys from "../keys";
import {
  IMAGE_LOADING,
  IMAGE_LOADING_SUCCESS,
  IMAGE_LOADING_FAILURE
} from "../actions/types";

export const getImage = (baseUrl, query) => dispatch => {
  dispatch({ type: IMAGE_LOADING });

  try {
    setTimeout(async () => {
      const res = await axios.get(
        `${baseUrl}/api/?key=${keys.images}&q=${query}`
      );
      dispatch({
        type: IMAGE_LOADING_SUCCESS,
        payload: res.data.hits[0]
      });
    }, 1000);
  } catch (err) {
    console.error(err);
    dispatch({ type: IMAGE_LOADING_FAILURE, payload: err });
  }
};
