import { useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import "./styles.css";
import TaskList from "./TaskList";
import Title from "./Title";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks((tasks) => [...tasks, newTask]);
  }
  function handleDeleteTask(id) {
    setTasks((current) => current.filter((ele) => ele.id !== id));
  }
  function handleToggleTask(id) {
    setTasks((current) =>
      current.map((ele) =>
        ele.id === id ? { ...ele, completed: !ele.completed } : ele
      )
    );
  }

  return (
    <div className="APP">
      <Title />
      <Form onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
      <Footer tasks={tasks} />
    </div>
  );
}
