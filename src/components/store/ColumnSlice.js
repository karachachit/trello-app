import { createSlice } from"@reduxjs/toolkit"

  export const ListSlice = createSlice({
    name: "todosSlice",
    initialState:{
      todos:[],
    },
    reducers: {
      addTodo: (state, action) => {
        state.todos.push = (action.payload);
        console.log("action call", action);   
      },
      removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      },
    addCard: (state, action) => {
      state.todos.forEach((item) => {
        if (item.id === action.payload.parentId) {
          if (Object.hasOwn(item, "children")) {
            item.children.push(action.payload)
          }else{
            item.children =[];
            item.children.push(action.payload)
          }
        }
      });
      console.log("action call", action, state.list);
    },
  },
});
export const { addTodos, addCard, removeTodo } = ListSlice.actions;

   











// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   list: [],
// };
// export const ColumnSlice = createSlice({
//   name: "listdata",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       state.todos = [...state.todos, action.payload];
//     },
//   },
// });

// export const listAction = ColumnSlice .actions;

