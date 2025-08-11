import { useState } from "react";

export default function Tasklist({ tasks, deletefun }) {


  return (
    <div>
      {tasks.map((items, index) => {
        return (
          <div key={index}>
            <p className="bg-gray-300 px-1 border-gray-700 border-1 mt-1 relative">
              {items}
              <button
                className="border-1 absolute right-22 "
                onClick={deletefun(index)}
              >
                Delete
              </button>
              <button className="border-1 absolute right-0 ">Complated</button>
            </p>
          </div>
        );
      })}
    </div>
  );
}
