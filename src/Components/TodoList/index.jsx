import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";
import "./styles.scss";

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
  onCompletedClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
  onCompletedClick: PropTypes.func,
};

function TodoList(props) {
  const { todos, onTodoClick, onCompletedClick } = props;

  function handleClickDeleted(todo, idx) {
    if (!onTodoClick) return;
    onTodoClick(todo, idx);
  }

  function handleCompletedToDoList(todo, idx) {
    if (!onTodoClick) return;

    onCompletedClick(todo, idx);
  }

  return (
    <ul className="todo-list m-0 p-0">
      {todos.map((todo, idx) => (
        <div key={idx} className="list-styles">
          <li
            key={todo.id}
            className={classnames({
              completed: todo.status === "completed",
              styles: true,
            })}
            onClick={() => handleCompletedToDoList(todo, idx)}
          >
            {idx + 1}.{todo.title}
          </li>
          <button
            className="btn-delete"
            onClick={() => handleClickDeleted(todo, idx)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}
    </ul>
  );
}

export default TodoList;
