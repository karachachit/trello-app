import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "styled-components";

const Card = () => {
  return (
    <CardStyle>
      <Box>
        <Typography></Typography>
      </Box>
    </CardStyle>
  );
};

export default Card;

const CardStyle = styled.div`
  display: flex;
  padding: 0.8rem;
  padding: 0.8rem;
  height: 150px;
  width: 350px;
  gap: 1rem;
`;
