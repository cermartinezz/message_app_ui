import React from "react";

export default function List() {
  return (
    <div className="bg-white w-1/2 p-10">
      <h1 className="text-6xl">Messages</h1>
      <ul className="mt-7">
        <li className="w-full bg-slate-400 p-5 rounded-xl">
          <div className="flex justify-between">
            <p>Message: asdadsaasdasdasdasd</p>
            <p>Status: Success</p>
          </div>
          <p className="self-end">Error message</p>
        </li>
      </ul>
    </div>
  );
}
