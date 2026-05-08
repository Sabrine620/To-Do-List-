import { useState } from "react";

export default function Form({ onAddTask }) {
  const [task, setTask] = useState("");
  function handleTaskChange(e) {
    setTask(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      task,
      completed: false,
    };
    if (!task) return alert("Enter your Task");
    onAddTask(newTask);
    setTask("");
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={handleTaskChange}
      />
      <button className="btn-add">ADD</button>
    </form>
  );
}
