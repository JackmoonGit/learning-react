import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../constants/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks, { id: tasks.length, title: task.title, description: task.description }]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>{props.children}</TaskContext.Provider>;
}
