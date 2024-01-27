import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const addTasks = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
      console.log(tasks);
    }
  };
  const deleteTask = (index) => {
    const updateList = [...tasks];
    console.log("Auto");
    updateList.splice(index, 1);
    setTasks(updateList);
  };

  return (
    <div className="flex flex-col items-center bg-zinc-500 h-screen">
      <div>
        <h1 className="text-indigo-200 text-4xl m-16 font-bold font-sans">Task Planner</h1>
      </div>
      <div className="p-5">
        <input
          type="text"
          value={task}
          className="bg-slate-100 rounded-md p-4"
          placeholder="Enter the Task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button
          onClick={addTasks}
          className=" bg-green-500 text-white rounded-md p-3 m-3 font-bold hover:bg-green-600"
        >
          Add Task
        </button>
      </div>
      <div>
        {tasks?.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <div
                key={index}
                className="flex bg-slate-100 m-4 py-4 pl-14 pr-4 rounded-md "
              >
                <li className="self-center font-semibold pr-24 mr-6 grow">
                  {task}
                </li>
                <button
                  onClick={() => {
                    deleteTask(index);
                  }}
                  className="bg-red-500 text-white p-3 m-1 rounded-md font-bold hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <div>
            <p className=" text-indigo-200">No Task Found </p>
          </div>
        )}
      </div>
    </div>
  );
}
