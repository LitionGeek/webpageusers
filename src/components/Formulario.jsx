import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { useForm } from '../hook/useForm';
/* import { InputFile } from './InputFile'; */

export const Formulario = () => {


    const [datos,setDatos] = useState([]);
    var base64;
    const blobToBase64 = (blob)=>{
        return new Promise((resolve,reject)=>{
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend=()=>{
            console.log(reader.result.split(',')[1])
      
            base64 = reader.result;
            console.log(base64)
            setDatos({
                ...datos,
                ['imagen']:base64,
            })
          }
        })
      }

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        /* console.log(e.target) */
        setDatos({
            ...datos,
            [name]:value,
        })
        console.log(datos)
    }

    const [msg, setMsg] = useState({
        message: "",
        color: "",
        visible: "no",
      });

    const handleSubmit = async (e)=>{
       
     
        console.log('HOla')
        const response = await fetch('http://localhost:5000/api/usuarios',{
            method:'POST',
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(datos),
        });
        const content = await response.json();
        setMsg(
            content.msg === 1
              ? {
                  message: "Se ha creado el producto correctamente",
                  color: "success",
                  visible: "si",
                }
              : {
                  message: "No se ha podido crear el producto",
                  color: "danger",
                  visible: "si",
                }
          );
    }

  return (
    <>
        <h1>Formulario</h1>
        <form className="row form" onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label className='form-label'>Email:</label>
            <input type="email"
                className='form-control'
                name='email'
                autoFocus
             /*    value={email} */
                required
                onChange={handleInputChange}/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Nombre:</label>
            <input type="text"
                className='form-control'
                name='nombre'
           /*      value={nombre} */
                required
                onChange={handleInputChange}/>
        </div>
        <div className='mb-3'>
            <label className='form-label'> Password:</label>
            <input type="password"
                className='form-control'
                name='password'
    /*             value={edad} */
                required
                onChange={handleInputChange}/>
        </div>
        <input type="file" multiple onChange={(e)=>blobToBase64(e.target.files[0])}/>
        <button className='btn btn-primary'>Enviar</button>
    </form>

    </>
  )
};
