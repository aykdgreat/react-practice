import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, item: "Item 1", done: false },
    { id: 2, item: "Item 2", done: true },
    {
      id: 3,
      item: "what if i type an item that is unusually longer than normal? Well, I wont know until I try :)...... Hmmn, it works as expected",
      done: true,
    },
  ]);
  const updateTodoList = (e) => {
    const newTodos = [...todos];
    if (e.target.value === "") return alert("Please enter an item");
    newTodos.push({ id: todos.length + 1, item: e.target.value });

    setTodos(newTodos);
    e.target.value = "";
  };

  const deleteTodo = (id) => {
    let copyOfTodos = [...todos];
    // console.log(id);

    if (confirm("Sure to delete?")) {
      copyOfTodos = copyOfTodos.filter((todo) => todo.id !== id);
      setTodos(copyOfTodos);
    }
  };

  const markDone = (id) => {
    let copyOfTodos = [...todos];
    // console.log(id);
    copyOfTodos.find((todo) => todo.id === id).done = !copyOfTodos.find(
      (todo) => todo.id === id
    ).done;
    setTodos(copyOfTodos);
  };
  return (
    <div className="p-10 flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mb-4">
        My TodoList [{todos.length} {todos.length > 1 ? "items" : "item"}]
      </h1>
      <input
        type="text"
        className="border shadow-md border-gray-300 rounded-md mb-4 p-4 outline-none w-96 text-center"
        placeholder="Enter an item"
        onBlur={updateTodoList}
      />
      <ul>
        {todos.map((todo) => (
          <li
            className="bg-white shadow-md w-96 p-4 rounded-md mb-4 overflow-x-auto flex justify-between"
            key={todo.id}
            onDoubleClick={() => deleteTodo(todo.id)}
          >
            {todo.done ? (
              <>
                <span className=" line-through">{todo.item}</span>
                {todo.done && ""}
              </>
            ) : (
              <span>{todo.item}</span>
            )}

            <span className="text-left" onClick={() => markDone(todo.id)}>
              {todo.done ? "❎" : "✅"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
