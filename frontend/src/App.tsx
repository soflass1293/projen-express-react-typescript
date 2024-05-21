import "./App.css";
import { useEffect, useState } from "react";
import Item from "./components/item";

const URL = "http://localhost:3001";

export type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleFetch = () => {
    const fn = async () => {
      try {
        setTodos([]);
        const response = await fetch(`${URL}/todos`);
        const json = await response.json();
        setTodos(json);
      } catch (error) {
        setTodos([]);
        console.log(error);
      }
    };
    void fn();
  };
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>
      </header>
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
