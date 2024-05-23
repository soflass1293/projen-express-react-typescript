import { Resource } from "../App";

const Item = ({ item }: { item: Resource }) => (
  <div className="item">{item.title}</div>
);
export default Item;
