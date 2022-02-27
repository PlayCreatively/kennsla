import Card from "./Card";
import { storage } from "../bitiConverter";

const CardRef: React.FC<{ id: string }> = ({ id }) => {
  const card = storage[id];
  return card === undefined ? (
    <p>{id} ref not found.</p>
  ) : (
    <Card name={id}>{card.data}</Card>
  );
};

export default CardRef;
