import axios from "axios";

import {
  WORD_LOADING,
  WORD_LOADING_SUCCESS,
  WORD_LOADING_FAILURE
} from "./types";

export const getWord = baseUrl => async dispatch => {
  dispatch({ type: WORD_LOADING });

  try {
    const apiKey = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://random-word-api.herokuapp.com/key?"
    );

    const res = await axios.get(`${baseUrl}/word?key=${apiKey.data}&number=1`);
    dispatch({ type: WORD_LOADING_SUCCESS, payload: res.data[0] });
  } catch (err) {
    console.error(err);
    dispatch({ type: WORD_LOADING_FAILURE, err });
  }
};
