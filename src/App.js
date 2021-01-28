import React, { useState,useEffect} from "react";
import "./App.css";
import Todo from "./Todo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import db from './firebase';
import firebase from 'firebase';
function App() {
  const [todos, setTodos] = useState([
    // "hii there this is my first project",
    // "get the rubbish out of this app",
    // "get the bails out of the stumps ",
  ]);
  const [input, setInput] = useState([""]);
  // console.log(todos);

  // when the app loads, we need to listen to the database and fetch new todo as they get added/removed.
useEffect(()=>{
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    // console.log(setTodos(snapshot.docs.map(doc=>doc.data().todo)))
    setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
  })
},[])

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input]);
    setInput([""]);
  };
  return (
    <div className="App">
      <h1>Hello this a TODO App!!!!</h1>
      <form>
      <FormControl>
        <InputLabel>Write a Todo </InputLabel>
        <Input
          type="text"
          onChange={(event) => setInput(event.target.value)}
          value={input}
        /></FormControl>
        <Button
          disabled={!input}
          variant="contained"
          onClick={addTodo}
          color="primary"
        >Addtodo
        </Button>
      
      </form>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
