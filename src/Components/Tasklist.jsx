import { useCallback, useRef, useState } from "react";
import Searchcop from "./Searchcop";
import { useEffect } from "react";
import axios from "axios";

export default function Tasklist({ taskObj, setTaskFunc }) {
  //? All status
  let [refresh, setrefresh] = useState(false);
  let [del, setdelRef] = useState(false);
  let [textPress, setTextPress] = useState(false);
  let [taskText, setTaskText] = useState("");
  let [taskdes, setTaskdes] = useState("");
  let reTaskInput = useRef(null);

  //* fetch data task from db
  let userFetch = async () => {
    try {
      let url = await axios.get("http://localhost:5000/users");
      if (!url) {
        throw new Error("not found anyTask");
      }
      setTaskFunc(url.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(taskObj);

  //* complated Task
  let update = async (index) => {
    try {
      let id = await axios.get("http://localhost:5000/users");
      if (!id) {
        throw new Error("not found any id of array of obj");
      }
      let users = id.data;
      let singleTask = users[index];
      let updatedTask = { ...singleTask, comp: !singleTask.comp };

      //* put api call
      let url = await axios.put(
        `http://localhost:5000/users/${singleTask._id}`,
        updatedTask
      );
      setrefresh(!refresh);
      console.log(url);
    } catch (error) {
      console.log(error);
    }
  };

  //* api call for delete task
  let deleteTask = async (index) => {
    try {
      let id = await axios.get("http://localhost:5000/users");
      if (!id) {
        throw new Error("not found any id of array of obj");
      }
      let users = id.data;
      let singleTask = users[index];
      await axios.delete(`http://localhost:5000/users/${singleTask._id}`);

      setdelRef(!del);
    } catch (error) {
      console.log(error);
    }
  };

  let pressUpdation = async (index) => {
    try {
      let id = await axios.get("http://localhost:5000/users");
      if (!id) {
        throw new Error("not found any id of array of obj");
      }
      let users = id.data;
      let singleTask = users[index];
      setTextPress(!textPress);

      if (textPress) {
        let newTask = { ...singleTask, task: taskText };
        let response = await axios.put(
          `http://localhost:5000/users/${singleTask._id}`,
          newTask
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userFetch();
  }, [refresh, del, textPress]);

  return (
    <>
      {taskObj.map((items, index) => {
        return (
          <div key={index} className="border-2 p-1 mt-1">
            {textPress ? (
              <div className="">
                {/* <p className="text-white ">Task : {items.task}</p> */}
                <span className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="enter text"
                    onChange={(event) => setTaskText(event.target.value)}
                    value={taskText}
                    className="border-1 w-25"
                  />
                  <button
                    onClick={() => pressUpdation(index)}
                    className="bg-orange-300 text-white border-1 hover:bg-blue-500 hover:text-white rounded-lg px-2"
                  >
                    UpdateTask
                  </button>
                  {items.comp ? (
                    <i
                      onClick={() => update(index)}
                      className="text-lg  hover:text-black text-yellow-300 fa-solid fa-circle-check"
                    ></i>
                  ) : (
                    <i
                      onClick={() => update(index)}
                      className="text-sm  hover:text-black  fa-solid fa-circle-check"
                    ></i>
                  )}

                  <i
                    onClick={() => deleteTask(index)}
                    className="text-lg hover:text-black fa-solid fa-trash"
                  ></i>
                </span>

                <p className="text-orange-200"> Description : {items.des} </p>
              </div>
            ) : (
              <div className="">
                <div className="flex gap-20">
                  <p className="text-white flex items-center justify-between">
                    Task : {items.task}
                  </p>
                  <span className="flex items-center justify-between">
                    <button
                      onClick={() => pressUpdation(index)}
                      className="bg-orange-300 text-sm text-white border-1 hover:bg-blue-500 hover:text-white rounded-lg px-2 w-20"
                    >
                      Re-write
                    </button>
                    {items.comp ? (
                      <i
                        onClick={() => update(index)}
                        className="text-lg  hover:text-black text-yellow-300 fa-solid fa-circle-check"
                      ></i>
                    ) : (
                      <i
                        onClick={() => update(index)}
                        className="text-sm  hover:text-black  fa-solid fa-circle-check"
                      ></i>
                    )}

                    <i
                      onClick={() => deleteTask(index)}
                      className="text-lg hover:text-black fa-solid fa-trash"
                    ></i>
                  </span>
                </div>

                <p className="text-orange-200"> Description : {items.des} </p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
