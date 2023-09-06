import React from "react";
import List from "../components/List";
import { styled } from "styled-components";


const Body = () => {
  return (
    <MyBody>
      {/* <Filter /> */}
      <div style=" display:flex, gap: 1rem,flexDirection: row,flexWrap: wrap">
        <List />
      </div>
    </MyBody>
  );
};
const MyBody = styled.div`
color:black;
  width: 100%;
  border: 1px;
  
`
export default Body;
