import React from "react";
import { connect } from "react-redux";
import { getWord } from "../actions/getWord";
import { getImage } from "../actions/getImage";

const Button = ({ getWord, getImage, query }) => {
  const callAPIs = async () => {
    await getWord("https://random-word-api.herokuapp.com/");
    getImage("https://pixabay.com", query);
  };

  return <button onClick={callAPIs}>get random word/image</button>;
};

const mapStateToProps = state => {
  return {
    query: state.word.data
  };
};

export default connect(mapStateToProps, { getWord, getImage })(Button);
