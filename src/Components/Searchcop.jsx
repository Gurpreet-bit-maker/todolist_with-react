import { useState } from "react";
import Tasklist from "./Tasklist";

export default function Searchcop({
  addBtn,
  inpValue,
  setfun,
  setDes,
  desValue,
})



{
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
      <h1 className="text-2xl font-bold text-center mb-5 tracking-wider">
        TODO LIST
      </h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter title..."
            onChange={(event) => setfun(event.target.value)}
            className="border-1 border-gray-400 w-30 text-lg p-1 rounded placeholder-white text-white text-shadow-lg"
            value={inpValue}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(event) => setDes(event.target.value)}
            className="border-1 ml-2 border-gray-400 w-30 text-lg p-1 rounded text-shadow-lg"
            value={desValue}
          />
          <br />
          <button
            onClick={addBtn}
            className="border mt-1 px-2 rounded bg-black text-white"
          >
            Add
          </button>
{console.log(desValue)}
          <br />
        </div>
        {/* all tasks props */}
      </div>
    </div>
  );
}
