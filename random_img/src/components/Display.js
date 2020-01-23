import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
    <Container>
      {word && <h1>word is: {word}</h1>}

      {(wordIsLoading || imageIsLoading) && (
        <Loader type="ThreeDots" color="#eee" height={200} width={200} />
      )}

      {wordIsLoading && <p>generating random word...</p>}
      {imageIsLoading && <p>retrieving image...</p>}

      {image && !wordIsLoading && !imageIsLoading && (
        <Image src={image.largeImageURL}></Image>
      )}

      {!image && word && !imageIsLoading && !wordIsLoading && (
        <p>no images found for {word}</p>
      )}

      {!image && !word && <p>get a random image to get started!</p>}

      {wordError || (imageError && <p>uh oh!</p>)}
    </Container>
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

const Container = styled.main`
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #eee;
`;

const Image = styled.img`
  width: 67%;
`;
