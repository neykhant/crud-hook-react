//jshint ignore:start
import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Style from "./components/Style.module.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className={Style.container}>
      <Header />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        
      />

      <PostList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </div>
  );
};

export default App;
