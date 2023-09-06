import React from "react";
import { styled } from "styled-components";
const SideBar = () => {
  return <SideStyle>SideBar</SideStyle>;
};

export default SideBar;

const SideStyle = styled.div`
  display: flex;
  background:#cdd3f1;
  height:720px;
  padding: 1rem;
  max-width: 25%;
`;
