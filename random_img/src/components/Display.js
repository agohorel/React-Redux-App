import React from "react";
import { connect } from "react-redux";

const Display = props => {
  console.log(props);
  return <div>display</div>;
};

const mapStateToProps = state => {
  return {
    word: state.word.data,
    wordIsLoading: state.word.loading,
    wordError: state.word.error,
    image: state.image.data,
    imageIsLoading: state.image.loading,
    imageError: state.image.error
  };
};

export default connect(mapStateToProps, {})(Display);
