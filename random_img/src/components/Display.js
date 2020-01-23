import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

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

      {wordIsLoading || (imageIsLoading && <p>loading...</p>)}

      {image && image.hits && <Image src={image.hits[0].largeImageURL}></Image>}

      {!image && word && <p>no images found for {word}</p>}

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
