"use client";

import styles from "./page.module.css";
import Todo from "@exp/components/Todo";
import React, {useState} from "react";
import useInitialData from "@exp/util/useInitialData";

export default function Home() {
  const { data: todos_init, error, isLoading } = useInitialData();
  const [todos, setTodos] = useState(todos_init);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <main className={styles.main}>
      <div>
        <Todo todos={todos ?? todos_init} setTodos={setTodos}/>
      </div>
    </main>
  );
};