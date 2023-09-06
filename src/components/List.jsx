import React from "react";
import Card from "./Card";
import AddNewCard from "./AddNewCard";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "./store/slices/todos-slice";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const List = () => {
  const todos = useSelector((store) => store.todosSlice.todos);

  const dispatch = useDispatch();
  const deleteTodoHandler = (todoId) => {
    dispatch(removeTodo(todoId));
  };
  return (
    <>
      {(todos.length &&
        todos.map((list) => (
          <div key={list.id}>
            <Mylist sx={{ boxShadow: 3 }} key={list.id}>
              <div
                style=" display:flex, flexDirection:row,justifyContent: space-between,padding: 1rem"
                key={list.id}
              >
                <Typography style="padding:0.8rem"> {todos.title}</Typography>
                <div style="padding:1rem 0">
                  <DeleteIcon onClick={() => deleteTodoHandler(list.id)} />
                </div>
              </div>

              <div style="display:flex,flexDirection:column,gap: 1rem,padding: 0.2rem">
                {(list.children?.length > 0 &&
                  todos.children.map((children) => (
                    <Card key={children.id} cardInfo={children} />
                  ))) ||
                  []}
              </div>

              <div>
                <AddNewCard type="card" parentId={list.id} />
              </div>
            </Mylist>
          </div>
        ))) ||
        []}

      <Mylist>
        <AddNewCard />
      </Mylist>
    </>
  );
};

export default List;

const Mylist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ccc;
  height: 200px;
  width: 350px;
  border: 1px solid;
  margin: 3rem -7.5rem;
`;
