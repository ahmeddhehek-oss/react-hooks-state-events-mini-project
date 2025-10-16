
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const categoryOptions = (categories || []).filter((c) => c !== "All");
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categoryOptions[0] || "");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;

    const newTask = { text, category };
    onTaskFormSubmit(newTask);

    setText("");
    setCategory(categoryOptions[0] || "");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>

      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categoryOptions.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


