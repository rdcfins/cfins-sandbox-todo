"use client";
import styles from "../app/page.module.css";
import TodoList from "@exp/components/TodoList";

export default function Todo({ todos, setTodos }) {

    async function handleSubmit(e) {
    e.preventDefault();
    let todos_parsed = await JSON.parse(todos);
    let data = await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify([
        ...todos_parsed,
        {
          id: Math.random() * 100,
          name: e.target.todo.value,
          completed: false,
        },
      ]),
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await data.json();
    console.log("Response", data);
    setTodos(JSON.stringify(data));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Todo</h1>
      <div className={styles.c}>
        <label htmlFor="todo">New Task</label>
        <input type="text" id="todo" />
        <button>Add</button>
      </div>
      <TodoList todos={JSON.parse(todos)} setTodos={setTodos} />
    </form>
  );
}
