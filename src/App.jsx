import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
//import { tasks as data } from "./data/tasks";
//import { useState, useEffect } from "react";
//lo comentado se a a TaskContext 
function App() {
  //const [tasks, setTasks] = useState([]);

  /* useEffect(() => {
    setTasks(data);
  }, []); */

  /* function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  } */

  /* function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  } */

  return (
    <main className="bg-zinc-900 h-screen">
      {/* <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} /> */}
      <div className="container mx-auto bg-gray-50 p-10">
      <TaskForm />
      <TaskList />
      </div>
      
    </main>
  );
}

export default App;
