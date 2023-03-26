import { useState, useRef, useContext } from "react";
//import { TaskContext } from "../context/TaskContext";
import { TaskContext } from "../context/TaskContext";

function TaskForm(/* { createTask } */) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);
  //const valor = useContext(TaskContext);
  //console.log(valor);
  const inputRef = useRef();

  const HandleSubmit = (e) => {
    e.preventDefault();
    //console.log(title)
    /* const newTask ={
      title,
      id: 6,
      description: "Algo nuevo"
    }
    createTask(newTask) */

    //console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
    inputRef.current.focus();
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={HandleSubmit} className="bg-slate-100 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3 text-center">Crear tarea</h1>
        <input
          ref={inputRef}
          placeholder="Escriba la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-600 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Ingresa la descripción"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-600 p-3 w-full mb-2"
          value={description}
        ></textarea>
        <button
         className="bg-indigo-700 px-3 py-1 text-white hover:bg-indigo-400"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
