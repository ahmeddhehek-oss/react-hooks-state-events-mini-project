import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {
   const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(taskText) {
    setTasks((prev) => prev.filter((t) => t.text !== taskText));
  }

  function handleAddTask(newTask) {
    setTasks((prev) => [...prev, newTask]);
  }

  const tasksToDisplay =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((t) => t.category === selectedCategory);


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory} />

      <NewTaskForm
       categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask} />

      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
