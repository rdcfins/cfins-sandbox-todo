"use client";

import styles from "./page.module.css";
import Todo from "@exp/components/Todo";
import React from "react";
import useInitialData from "@exp/util/useInitialData";

console.log("Create New Event");

export default function Home() {
  const [todos, setTodos] = useInitialData();
  // const [initalTodo, setInitalTodo] = useInitialData();
  // console.log(initalTodo);
  // const [todos, setTodos] = useState(data);
  console.log(todos);

  

  console.log("Home Rendered");
  return (
    <main className={styles.main}>
      <div>
        <Todo todos={todos}/>
      </div>
    </main>
  );
};