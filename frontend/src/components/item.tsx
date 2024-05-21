import { Todo } from "../App";

const Item = ({ todo }: { todo: Todo }) => (
  <div className="item">{todo.title}</div>
);
export default Item;
