import { useState } from "react";

export default function Task({ task, onDeleteTask, onToggleTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.task);

  function handleSave() {
    onToggleTask(task.id, editText);
    setIsEditing(false);
  }

  return (
    <li className="Tasks">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span style={task.completed ? { textDecoration: "line-through" } : {}}>
          {task.task}
        </span>
      )}

      <div>
        <button onClick={() => onDeleteTask(task.id)} className="delete">
          Delete
        </button>
        {isEditing ? (
          <button onClick={handleSave} className="save">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="edit">
            Edit
          </button>
        )}
      </div>
    </li>
  );
}
