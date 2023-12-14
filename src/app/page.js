"use client";

import styles from "./page.module.css";
import Todo from "@exp/components/Todo";
import React, { useEffect, useState, useRef } from "react";

export default function Home() {
  const initalTodos = [
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: false },
  ];

  const [todos, setTodos] = useState(JSON.stringify(initalTodos));
  
  // Inital Data fecting for JSON string
  const isMounted = useRef(true); // unmounted by default
  
  useEffect(() => {
    if (
      localStorage.getItem("todo") != null &&
      isMounted.current
    ) {
      setTodos(localStorage.getItem("todo"));
    }
    isMounted.current = false;
    return () => {
      localStorage.setItem("todo", todos);
    };
  }, [todos, todos.length]);
  console.log("Home Rendered");
  return (
    <main className={styles.main}>
      <div>
        <Todo todos={todos} setTodos={setTodos} />
      </div>
    </main>
  );
}
