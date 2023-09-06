import React, { useState } from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { addCard, addTodos } from "./store/ColumnSlice";

const AddNewCard = ({ type, parentId }) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  // console.log("type", type);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (type) {
      dispatch(
        addCard({ id: Math.random(), title: enteredTask, parentId: parentId })
      );
    } else {
      dispatch(addTodos({ id: Math.random(), title: enteredTask }));
    }
    setEnteredTask("");
  };

  const updateInput = (e) => {
    setEnteredTask(e.target.value);
  };
  const openForm = () => {
    setIsFormVisible(true);
  };
  const hideForm = () => {
    setIsFormVisible(false);
  };

  const isSubmitDisabled = enteredTask.trim().length === 0;
  return (
    <div>
      <button onClick={openForm}>+ Add New Todo</button>
      {isFormVisible && (
        <StyleForming onSumit={submitHandler}>
          <div>
            <input
             style=" backgroundColor:white,&::focus:border: 5px solid black,"
              type="text"
              value={enteredTask}
              placeholder={type ? "Enter Card Name" : "Enter List Name"}
              onChange={updateInput}
            />
          </div>

          <div>
            <button  style=" display:flex,flexDirection:row,gap:1rem," variant="contained"  onClick={hideForm}>Save</button>
            <button style="borderRadius:0.2rem," onClick={isSubmitDisabled}>Cancel</button>
          </div>
        </StyleForming>
      )}
    </div>
  );
};

export default AddNewCard;

const StyleForming = styled.form`
     display: flex;
     flex-direction: column;
     padding: "0.1rem ";
     gap: "1rem"; 
  `

  
