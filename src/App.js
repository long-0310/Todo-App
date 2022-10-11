import { useState } from "react";
import TodoFrom from "./Components/TodoFrom";
import TodoList from "./Components/TodoList";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  function handleTodoForm(formValue) {
    console.log(formValue);
    // add new todo to todolist
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handleCompletedTodo(todo, idx) {
    const newTodoList = [...todoList];

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    setTodoList(newTodoList);
  }

  function handleTodoClick(todo, idx) {
    const newTodoList = [...todoList];
    const index = todoList.findIndex((x) => x.id === todo.id);

    if (index < 0) return;

    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  const handleShowAllClick = () => {
    setFilterStatus("all");
  };

  const handleShowCompletedClick = () => {
    setFilterStatus("completed");
  };

  const handleShowNewClick = () => {
    setFilterStatus("new");
  };

  const renderedTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );

  return (
    <div className="App">
      <h4 className="mb-4">Let's add what you have to do ! 😎</h4>
      <TodoFrom onSubmit={handleTodoForm} />
      <div className="todos-list">
        <div>
          <p className="title-list">List : </p>
          <TodoList
            todos={renderedTodoList}
            onTodoClick={handleTodoClick}
            onCompletedClick={handleCompletedTodo}
          />
          <div className="btn-click">
            <button onClick={handleShowAllClick}>All</button>
            <button onClick={handleShowCompletedClick}>Completed</button>
            <button onClick={handleShowNewClick}>New</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
