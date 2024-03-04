import { useState } from "react";

function TaskForm({createTask}) {

const [title, setTitle] = useState("")
const [description, setDescription] = useState("")

const handleSubmit = (e) => {
    e.preventDefault()
    createTask({
      title,
      description
    })
    setTitle("")
    setDescription("")
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Escribe tu tarea" onChange={(e) => setTitle(e.target.value)} value={title}/>
        <textarea placeholder="Escribe la descripcion de la tarea" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
}
export default TaskForm;
