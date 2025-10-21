import { useEffect, useState } from "react";
import Tasklist from "./Tasklist";
import axios from "axios";

export default function Searchcop() {
  let [titleValue, setTitleValue] = useState("");
  let [descriptionValue, setDesValue] = useState("");
  let [taskObj, setTaskObj] = useState([]);

  let addTask = async () => {
    try {
      let newTask = { task: titleValue, des: descriptionValue, comp: false };
      setTitleValue("");
      setDesValue("");
      if (newTask.task !== "") {
        let res = await axios.post("http://localhost:5000/add", newTask);
        setTaskObj((prev) => [...prev, res.data]);
        console.log(res);
      } else {
        alert("Please add a task");
        throw new Error("cannot submit this task");
      }
    } catch (error) {
      console.log(error);
    }
  };


  // console.log(taskObj);
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 w-80 m-5 shadow-2xl rounded-lg" >
      <h1 className="text-2xl font-bold text-center mb-5 tracking-wider">
        TODO LIST
      </h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter title..."
            onChange={(event) => setTitleValue(event.target.value)}
            className="border-1 border-gray-400 w-30 text-lg p-1 rounded placeholder-white text-white text-shadow-lg"
            value={titleValue}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(event) => setDesValue(event.target.value)}
            className="border-1 ml-2 border-gray-400 w-30 text-lg p-1 rounded text-shadow-lg"
            value={descriptionValue}
          />
          <br />
          <button
            onClick={addTask}
            className="border mt-1 px-2 rounded bg-black text-white"
          >
            Add
          </button>

          <br />
          <Tasklist setTaskFunc={setTaskObj} taskObj={taskObj} />
        </div>
      </div>
    </div>
  );
}
