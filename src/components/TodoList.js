"use client";
import React, { useState } from "react";
import styles from "../app/page.module.css";

export default function TodoList({ todos }) {
  const [todos_state, setClicked] = useState(todos);

  function handleClicked(e) {
    e.target.checked = !!e.target.checked;
    setClicked(
      JSON.stringify(
        todos_state.map((todo) => {
          return todo.id === Number(e.target.dataset.setid)
            ? { ...todo, completed: e.target.checked }
            : todo;
        })
      )
    );
  }

  return (
    <ul className={styles.grid}>
      {todos_state.map((todo) => (
        <li className={styles.card} key={todo.id}>
          <h3>{todo.name}</h3>
          <input
            id={todo.id}
            data-setid={todo.id}
            type="checkbox"
            checked={todo.completed}
            onChange={handleClicked}
          />
        </li>
      ))}
    </ul>
  );
}
