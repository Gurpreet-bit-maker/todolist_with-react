import { useState } from "react";
import Tasklist from "./Tasklist";

export default function Searchcop() {
  let [inpValue, setInpValue] = useState("");
  let [taskObj, settaskObj] = useState([]);

  let addedTask = () => {
    if (inpValue !== "") {
      settaskObj([...taskObj, inpValue]);
      setInpValue("");
    }
  };
  // *deleteTask function passed as prop to tasklist component
  let deleteTaskFun = (index) => {
    settaskObj(taskObj.filter((items) => items.index !== index));
  };

  return (
    <div className="border-red-500 border-2 w-1/3 p-10">
      <h1 className="text-2xl font-bold">Todo Your Tasks.</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter Task..."
            onChange={(event) => setInpValue(event.target.value)}
            className="border-2"
            value={inpValue}
          />
          <br />
          <button onClick={addedTask} className="border mt-5">
            Add Task
          </button>

          <br />
        </div>
        {/* all tasks props */}
        <Tasklist tasks={taskObj} deletefun={deleteTaskFun} />
      </div>
    </div>
  );
}
