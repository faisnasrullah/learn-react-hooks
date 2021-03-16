import React from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <ClassCounter />
      <hr />
      <HookCounter />
      <hr />
      <HookCounterTwo />
    </div>
  );
}
