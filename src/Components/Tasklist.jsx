import { useState } from "react";
import Searchcop from "./Searchcop";
import { useEffect } from "react";

export default function Tasklist() {
  let [inpValue, setInpValue] = useState("");
  let [description, setDescription] = useState("");
  let [taskObj, settaskObj] = useState([]);
  // let [complated,setcomplated] = useState(false);
  let addedTask = async () => {
    if (inpValue.trim() !== "") {
      settaskObj([
        ...taskObj,
        { task: inpValue, des: description, comp: false },
      ]);
      setInpValue("");
      setDescription("");
    }

    try {
      await fetch(`http://localhost:5000/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskObj),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(async() =>
  // {
  // try {
  //       await fetch(`http://localhost:5000/add`, {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(taskObj),
  //       });

  //       if (!res.ok) {
  //         throw new Error("Failed to submit");
  //       }

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // ,[addedTask])

  // *deleteTask function
  let deleteTask = (index) => {
    let delT = taskObj.filter((_, i) => i !== index);
    settaskObj(delT);
  };
  //* complated task
  let complatedTaskFunc = (index) => {
    settaskObj(
      taskObj.map((items, i) =>
        i == index ? { ...items, comp: !items.comp } : items
      )
    );
  };
  console.log(taskObj);
  return (
    <div className="flex justify-start items-center h-[100vh]">
      <div className="border-red-500 border-2 w-1/3 p-10 ">
        {/* search bar and btn */}
        <Searchcop
          addBtn={addedTask}
          inpValue={inpValue}
          setfun={setInpValue}
          setDes={setDescription}
          desValue={description}
        />

        {/* tasks list */}
        {taskObj.map((items, i) => {
          return (
            <div key={i} className="">
              {items.comp ? (
                <div>
                  <p className="bg-red-500 text-white px-1 border-gray-700 border-1 mt-1 relative p-1 w-full">
                    {items.task}
                    <button
                      className="border-1 absolute right-22 text-gray-400 bg-white rounded px-1 text-sm pt-1"
                      onClick={() => deleteTask(i)}
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => complatedTaskFunc(i)}
                      className="border-1 absolute right-0  text-blue-500 font-bold bg-white rounded px-1  text-sm pt-1 w-20"
                    >
                      Complated
                    </button>
                  </p>{" "}
                </div>
              ) : (
                <div>
                  <p className="bg-gray-300 text-gray-700 px-1 border-gray-700 border-1 mt-1 relative p-1">
                    {items.task}
                    <button
                      className="border-1 absolute right-27  bg-white rounded px-1 text-sm pt-1"
                      onClick={() => deleteTask(i)}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => complatedTaskFunc(i)}
                      className="border-1 absolute right-0  bg-white rounded px-1  text-sm pt-1  w-25"
                    >
                      Do complate
                    </button>
                  </p>
                  <p className="bg-gray-300 text-yellow-500 px-1 border-gray-700 border-1 mt-1 relative p-1">
                    {" "}
                    Description :{" "}
                    <span className="text-blue-600">{items.des}</span>
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// module.exports = taskObj;
