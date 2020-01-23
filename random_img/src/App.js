import React from "react";
import "./App.css";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <Button />
        <Display />
      </Layout>
    </>
  );
}

export default App;
