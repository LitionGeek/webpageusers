import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Navigate   } from "react-router-dom"
import "../App.css";
import { LandingPage } from "./LandingPage";

export const PageLogin = () => {
  const [datos, setDatos] = useState({
    nombre:'',
    email:'',
    password:'',
    imagen:''
  });
  const [respuesta, setrespuesta] = useState(false)
  var base64;
  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        console.log(reader.result.split(",")[1]);

        base64 = reader.result;
        console.log(base64);
        resolve(
          setDatos({
            ...datos,
            ["imagen"]: base64,
          })
        );
      };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('Name: '+name+" value: "+value)
    console.log('datos: '+datos)
    setDatos({
      ...datos,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Hola')
    const response = await fetch("http://localhost:5000/api/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(datos),
    }); 
    console.log(response.status)
    if(response.ok){
      alert("Response OK: "+response.status)
      let json = await response.json();
      setrespuesta(true)
    }else{
      alert("Error-HTTP: "+response.status);
    }
    
  };
  return (
    <Fragment>
      <div className="container-fluido bg-primary">
        <div className="logo">
          <label className="d-block" id="texto-movimiento">
            Bienvenido, es bueno verte de nuevo{/* <span>&#160;</span> */}
          </label>
        </div>
        <div className="formulario">
          <label>Complete los siguientes campos para registrarse</label>
          <form className="form-group d-block" onSubmit={handleSubmit}>
            <label>Ingrese su nombre: </label>
            <input
              type="text"
              placeholder="Nombre"
              name="nombre"
              required
              title="minimo 3 caracteres"
              min="8"
              className="form-control"
              onChange={handleInputChange}
              
            />
            <label>Ingrese su email: </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-control"
              onChange={handleInputChange}
              required
            />
            <label>Ingrese su password: </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="form-control"
              min="6"
              onChange={handleInputChange}
              required
            />
            <label>Ingrese su imagen de perfil: </label>
            <input
              type="file"
              className="form-control"
              name="imagen"
              onChange={(e) => blobToBase64(e.target.files[0])}
            />
            <button className="btn btn-success mt-3">Registrarse</button>
          </form>
        </div>
      </div>
      {
        respuesta && <Navigate to="home"/>
      }
    </Fragment>
  );
};
