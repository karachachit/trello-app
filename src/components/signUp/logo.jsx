import styled from "@emotion/styled";
import React from "react";

export const logo = () => {
  return (
    <>
      <ImageStyle
        src="https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png"
        alt="logo"
        id="1"
      />
    </>
  );
};

export default logo;

const ImageStyle = styled.img`
    max-width:400px;
    max-height:200px;
    padding-top:100px
`