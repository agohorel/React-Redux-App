import React from "react";
import styled from "styled-components";

const Layout = props => {
  return <LayoutContainer>{props.children}</LayoutContainer>;
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c1c1c;
  min-height: 100vh;
`;
