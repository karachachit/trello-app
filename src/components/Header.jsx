import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { signOut } from "./signUp/firebase";
import { useSnackbar } from "notistack";
import { Button } from "@mui/material";
import { styled } from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar} = useSnackbar();
  const notify = (message, variant = "success") => {
    enqueueSnackbar({
      variant: variant,
      autoHideDuration: 5000,
      message: message,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      hideIconVariant: "true",
    });
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/register");
        notify("Signed out successfully!")
        console.log("Signed out successfully!");
      })
      .catch((error) => {
        // An error happened.
        notify(error?.message || error || "Something went wrong", "error");
      });
  };
  return (
    <header>
      <MyCard>
        <Button color="inherit" onClick={handleLogout}>
          {" "}
          Logout
        </Button>
      </MyCard>
    </header>
    
  );
};


export default Header;

const MyCard = styled.div`
    position:relative;
  right:1px;
`
