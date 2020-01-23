import axios from "axios";
import keys from "../keys";
import {
  WORD_LOADING,
  WORD_LOADING_SUCCESS,
  WORD_LOADING_FAILURE
} from "./types";

export const getWord = baseUrl => dispatch => {
  dispatch({ type: WORD_LOADING });
  
  try {
    setTimeout(async () => {
      const res = await axios.get(`${baseUrl}/word?key=${keys.words}&number=1`);
      dispatch({ type: WORD_LOADING_SUCCESS, payload: res.data[0] });
    }, 1000);
  } catch (err) {
    console.error(err);
    dispatch({ type: WORD_LOADING_FAILURE, err });
  }
};
