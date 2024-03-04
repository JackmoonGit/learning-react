import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask }) {
  if (tasks.lenght === 0) {
    return <h1>No hay tareas disponibles.</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}
export default TaskList;
