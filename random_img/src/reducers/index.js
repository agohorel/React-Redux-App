import { combineReducers } from "redux";

import { wordReducer } from "./wordReducer";
import { imageReducer } from "./imageReducer";

const rootReducer = combineReducers({ word: wordReducer, image: imageReducer });

export default rootReducer;
