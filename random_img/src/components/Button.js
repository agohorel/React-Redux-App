import React from "react";
import { connect } from "react-redux";
import styled from "styled-components"

import { getWord } from "../actions/getWord";
import { getImage } from "../actions/getImage";

const Button = ({ getWord, getImage, query }) => {
  const callAPIs = async () => {
    await getWord("https://random-word-api.herokuapp.com/");
    getImage("https://pixabay.com", query);
  };

  return <Btn onClick={callAPIs}>get random word/image</Btn>;
};

const mapStateToProps = state => {
  return {
    query: state.word.data
  };
};

export default connect(mapStateToProps, { getWord, getImage })(Button);

const Btn = styled.button`
  border: none;
  padding: 1rem 2rem;
  background-color: #eee;
  color: #1c1c1c;
  transition: .2s ease-out all;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, .25);
  border-radius: 3px;
  margin: 2rem;

  &:hover {
    cursor: pointer;
    background-color: #2c2c2c;
    color: #eee;
  }
`