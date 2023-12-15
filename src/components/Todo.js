import styles from "../app/page.module.css";
import TodoList from "@exp/components/TodoList";

export default function Todo({ todos, setTodos}) {
  console.log("Todo Rendered", todos);
  async function handleSubmit(e) {
    e.preventDefault();
    let data = await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify([
        ...todos,
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
    setTodos(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Todo</h1>
      <div className={styles.c}>
        <label htmlFor="todo">New Task</label>
        <input type="text" id="todo" />
        <button>Add</button>
      </div>
      <TodoList todos={todos} setTodos={setTodos} />
    </form>
  );
};