import Task from "./Task";

export default function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <div className="Task-container">
      <h3>Task List</h3>
      <ul>
        {tasks.map((ele) => (
          <Task
            key={ele.id}
            task={ele}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
      </ul>
    </div>
  );
}
