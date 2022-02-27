import Card from "./Card";
import { storage } from "../bitiConverter";
import { ReactElement } from "react";

const CardRef: React.FC<{ id: string }> = ({ id }) => {
  const card = storage[id];
  let c: ReactElement;
  return card == undefined ? (
    <p>{id} ref not found.</p>
  ) : (
    <Card name={id}>{card.data}</Card>
  );
};

export default CardRef;
