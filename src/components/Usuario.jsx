import React from "react";
import { useState } from "react";
import { buscarUsuario } from "../hook/useDatos";
import { InputFile } from "./InputFile";

export const Usuario = () => {
    const [emailUser, setemail] = useState({});
        
    const onchangeInput = (e) => {
        const { name, value } = e.target;
        console.log("usuario " + usuario);
        console.log("Cambio a " + e.target);
        setemail(value);
      };

  return (
    <div>
      <input
        type="text"
        onChange={onchangeInput}
        className="d-block mt-3 mb-3"
      />
      <button onClick={buscarUsuario} className="btn btn-primary d-block">
        Buscar
      </button>
     {/*  {
           
          error===false?
          console.log(error)
          :
          <InputFile usuario={usuario}/>
          
      } */}
 
    </div>
  );
};
