import { useState } from "react";
import Tasklist from "./Tasklist";

export default function Searchcop({addBtn,inpValue,setfun}) {
 


  return (
    <div >
      <h1 className="text-2xl font-bold text-center mb-5 tracking-wider">TODO LIST</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter Items..."
            onChange={(event) => setfun(event.target.value)}
            className="border-1 border-gray-400 w-full text-lg p-1 rounded"
            value={inpValue}
          />
          <br />
          <button onClick={addBtn} className="border mt-1 px-2 rounded bg-black text-white">
            Add
          </button>

          <br />
        </div>
        {/* all tasks props */}
        
      </div>
    </div>
  );
}
