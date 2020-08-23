import { createAction, createReducer, configureStore, createSlice } from "@reduxjs/toolkit";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// console.log(addToDo, deleteToDo);
// console.log(addToDo(), deleteToDo());
// console.log(addToDo.type, deleteToDo.type);

// // createReducer는 기본적으로 state를 변경하거나, 새로운 state를 return하는 역할을 함
// const reducer = createReducer([], {
//     // addToDo : state를 변경
//     [addToDo] : (state, action) => {
//         /* 
//             createReducer는 기본 redux와는 다르게 state를 변경할 수 있음
//             그 이유는 redux-toolkit이 자체적으로 { text: action.payload, id: Date.now() }, ...state 
//             이러한 작업을 해주기 때문
//         */
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     // deleteToDo : 새로운 state를 return
//     [deleteToDo] : (state, action) => 
//         state.filter(toDo => toDo.id !== action.payload)
// })

const toDos = createSlice({
    name: 'toDoReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => 
            state.filter(toDo => toDo.id !== action.payload)
    }
})

export const { add, remove } = toDos.actions;

// configureStore : redux developer tools을 사용할 수 있게됨(꼭 toolkit이 필요하지는 않음; 크롬 확장프로그램 Redux DevTools 필요)
export default configureStore({ reducer: toDos.reducer });