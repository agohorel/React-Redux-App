import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Head>
      <h1>img rndmzr</h1>
      <h3>random word -> random image</h3>
    </Head>
  );
};

export default Header;

const Head = styled.header`
  width: 100%;
  background-color: #3c3c3c;
  padding: 1rem 2rem;
  text-align: center;
  color: #eee;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
`;
