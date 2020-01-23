import React from "react";
import { connect } from "react-redux";

const Display = props => {
  const {
    word,
    wordIsLoading,
    wordError,
    image,
    imageIsLoading,
    imageError
  } = props;

  return (
    <>
      {word && <h1>word is: {word}</h1>}

      {wordIsLoading || (imageIsLoading && <p>loading...</p>)}

      {image && image.hits && <img src={image.hits[0].largeImageURL}></img>}

      {!image && word && <p>no images found for {word}</p>}

      {!image && !word && <p>get a random image to get started!</p>}

      {wordError || (imageError && <p>uh oh!</p>)}
    </>
  );
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
