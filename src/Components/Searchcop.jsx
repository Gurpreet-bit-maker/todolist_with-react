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
    <div>
      <h1 className="text-2xl font-bold text-center mb-5 tracking-wider">
        TODO LIST
      </h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter title..."
            onChange={(event) => setfun(event.target.value)}
            className="border-1 border-gray-400 w-30 text-lg p-1 rounded"
            value={inpValue}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(event) => setDes(event.target.value)}
            className="border-1 ml-2 border-gray-400 w-30 text-lg p-1 rounded"
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
