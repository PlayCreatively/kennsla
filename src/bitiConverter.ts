import React, { ReactNode } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

const storage: { [key: string]: ICardData } = {};

function SaveCard(card: ICardNode) {
  localStorage[card.name] = card.children;
  console.log(card.children);
  storage[card.name] = { data: card.children };
}

function SaveStorageToDisk() {
  localStorage["data"] = JSON.stringify(storage, toJson);
  console.log(localStorage["data"]);
}

function toJson(data: string | React.ReactNode): string {
  if (data == undefined) return "no data found.";
  var str = data as string;
  if (str) return str;
  var node = data as ReactNode;
  if (node) return reactElementToJSXString(node).valueOf();

  return "no data found.";
}

export { SaveCard, SaveStorageToDisk, toJson, storage };
