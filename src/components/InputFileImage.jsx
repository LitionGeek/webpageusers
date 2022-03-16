import React from "react";
import { url } from "./InputFile";

export const InputFileImage = (url) => {
  console.log('Tengo la url'+url)
  return (
    <div>
      <img src={url} />
    </div>
  );
};
