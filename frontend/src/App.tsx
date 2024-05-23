import "./App.css";
import { useEffect, useState } from "react";
import Item from "./components/item";
import Header from "./components/header";

const stage = process.env.REACT_APP_STAGE;
const URL =
  stage === "dev"
    ? "http://localhost:3001"
    : "https://projen-express-react-typescript.onrender.com";

export type Resource = {
  id: number;
  title: string;
};

function App() {
  const [tab, setTab] = useState("todos");
  const [items, setItems] = useState<Resource[]>([]);
  const handleFetch = (resource: string) => {
    const fn = async () => {
      try {
        setItems([]);
        const response = await fetch(`${URL}/${resource}`);
        const json = await response.json();
        setItems(json);
      } catch (error) {
        setItems([]);
        console.log(error);
      }
    };
    void fn();
  };
  useEffect(() => {
    handleFetch("todos");
  }, []);
  const handleClick = (title: string) => {
    setTab(title);
    handleFetch(title);
  };
  return (
    <div className="App">
      <div className="hero">
        <Header title="todos" active={tab === "todos"} onClick={handleClick} />
        <Header title="posts" active={tab === "posts"} onClick={handleClick} />
        <Header
          title="albums"
          active={tab === "albums"}
          onClick={handleClick}
        />
        <Header
          title="photos"
          active={tab === "photos"}
          onClick={handleClick}
        />
      </div>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
