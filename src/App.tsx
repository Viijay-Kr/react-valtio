import React from "react";
import "./App.css";

interface Todo {
  name: string;
  isDone: boolean;
}

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([
    {
      name: "Learn Solid",
      isDone: false,
    },
  ]);

  const todoRef = React.useRef<HTMLInputElement>(null);

  const onToggleTodo = (index: number) => () => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  const onAddTodo = () => {
    if (todoRef.current) {
      const name = todoRef.current.value;
      if (name) {
        setTodos([...todos, { name, isDone: false }]);
        todoRef.current.value = "";
      }
    }
  };

  return (
    <div className="App">
      <div className="md">
        <h2 className="text-lg font-bold">Create your todos here</h2>
        <div className="flex space-x-4 py-10 px-28">
          <input
            ref={todoRef}
            className="w-1/2 h-8 p-4 border-4 border-indigo-400 border-opacity-100"
            type="text"
            placeholder="Enter a Todo"
            onKeyPress={(e) => {
              e.which === 13 && onAddTodo();
            }}
          />
          <button
            onClick={onAddTodo}
            className="w-28 h-10 border-4 bg-indigo-400 rounded-sm border-indigo-400"
          >
            Add
          </button>
        </div>
        <div className="flex space-y-8 flex-col">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex items-center justify-items-center flex-row space-x-4 px-28"
            >
              <input
                type={"checkbox"}
                className="w-4 h-4 border-2 border-indigo-400"
                checked={todo.isDone}
                onChange={onToggleTodo(index)}
              />
              <span className={`${todo.isDone ? "line-through" : ""} text-lg`}>
                {todo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
