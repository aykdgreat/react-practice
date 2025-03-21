import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-10 flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mb-4">My Counter</h1>
      <div>
        <span className="block text-center">Count is</span>
        <span className="block font-semibold text-9xl">{count}</span>
      </div>
      <button
        className="bg-slate-300 shadow-sm p-2 inline-block mb-2"
        onClick={() => setCount(() => count + 1)}
      >
        Increment
      </button>
      <button
        className="bg-slate-300 shadow-sm p-2 inline-block mb-2"
        onClick={() => setCount(() => count - 1)}
      >
        Decrement
      </button>
      <button
        className="bg-slate-300 shadow-sm p-2 inline-block"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}
