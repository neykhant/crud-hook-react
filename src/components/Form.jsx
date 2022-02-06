//jshint ignore:start
import React, {useEffect} from "react";
import Style from "./Style.module.css";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  // console.log(todos);

  const updateTodo = (title, id) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? { title, id } : todo
    );
    setTodos(newTodo);
    setEditTodo("")
  };

  useEffect(() =>{
    if(editTodo){
      setInput(editTodo.title);
    }else{
      setInput("");
    }
  },[setInput, editTodo])

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id);
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter Post..."
          className={Style.input}
          value={input}
          required
          onChange={onInputChange}
        />
        <button type="sumbit" className={Style.addButton}>
          {editTodo ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Form;
