// import fs from "fs";
// import path from "path";

export function saveData(dataL: any) {
  var data = new FormData();
  data.append("upfile", "this is data");
  fetch("SERVER.SCRIPT", { method: "POST", body: data });
}

function errorHandler(err: NodeJS.ErrnoException | null) {
  alert(err?.message);
}