
import React from "react";

function Task({ task, text, category, onDeleteTask }) {
  
  const taskText = task ? task.text : text;
  const taskCategory = task ? task.category : category;

  function handleDelete() {
    if (onDeleteTask) onDeleteTask(taskText);
  }

  return (
    <div className="task">
      <div className="label">{taskCategory}</div>
      <div className="text">{taskText}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;

