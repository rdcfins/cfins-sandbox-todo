"use client";
import React, { useState } from "react";
import styles from "../app/page.module.css";

export default function TodoList({ todos, setTodos }) {

  function handleClicked(e) {
    e.target.checked = !!e.target.checked;
    setTodos(
      JSON.stringify(
        todos.map((todo) => {
          return todo.id === Number(e.target.dataset.setid)
            ? { ...todo, completed: e.target.checked }
            : todo;
        })
      )
    );
  }

  return (
    <ul className={styles.grid}>
      {todos.map((todo) => (
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
