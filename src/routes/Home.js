import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo.js";

function Home({ toDos, addToDo }){
    const [text, setText] = useState("");
    function onChange(e){
        setText(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault();
        addToDo(text);
        setText("");
    }
    return (
    <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} />
            <button>Add</button>
        </form>
        <ul>{ toDos.map(toDo => (<ToDo { ...toDo } key = { toDo.id } />)) }</ul>
    </>
    );
}

// redux state로 부터 component에 prop를 전달하는 function
function mapStateToProps(state, ownProps){
    // return 해주는 object는 connect로 연결해 준 곳으로 감
    return { toDos: state }
}

function mapDispathToProps(dispatch){
    return {
        // createSlice로 만든 add함수를 return함
        addToDo: text => dispatch(add(text))
     }
}

// connect : components와 store를 연결시켜줌
export default connect(mapStateToProps, mapDispathToProps)(Home);