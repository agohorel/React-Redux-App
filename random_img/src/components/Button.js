import React from "react";
import { connect } from "react-redux";
import { getWord } from "../actions/getWord";

const Button = ({ getWord }) => {
  const callAPIs = () => {
    getWord("https://random-word-api.herokuapp.com/");
  };

  return <button onClick={callAPIs}>get random word/image</button>;
};

export default connect(null, { getWord })(Button);
