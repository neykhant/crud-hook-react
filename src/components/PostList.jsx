//jshint ignore:start
import React from "react";
import Style from "./Style.module.css";

const PostList = ({ todos, setTodos, setEditTodo }) => {
  // console.log(todos);

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = ({id}) => {
    const findTodo = todos.find(todo => todo.id === id);
    setEditTodo(findTodo);
    // console.log( findTodo);
  }

  return (
    <div className={Style.postList}>
      {todos.map((todo) => (
        <li key={todo.id} className={Style.listItem}>
          <input type="text" 
          className={Style.inputText} 
          value={todo.title}
          onChange={(e) => e.preventDefault()} />
          <button
            type="submit"
            className={Style.editButton}
            onClick={() => handleEdit(todo)}
          >
            Edit
          </button>
          <button
            type="submit"
            className={Style.deleteButton}
            onClick={() => handleDelete(todo)}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default PostList;
