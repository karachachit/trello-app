import { createSlice } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAuth } from "../signUp/firebase";

const initialState = {
  value: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const getCurrentUser = () => (dispatch) => {
  onAuthStateChanged(getAuth, (user) => {
    if (user) {
      const uid = user;     
      dispatch(setCurrentUser(uid));
    } else {
      console.log("Unable to get current user");
    }
  });
};

export default userSlice.reducer;