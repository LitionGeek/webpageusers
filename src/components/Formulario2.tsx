import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { useForm } from '../hook/useForm';



interface FormData{
    email:string,
    nombre:string,
    edad:number
}


/* 
var objArchivo:any=[]; */

/* const convertirArchivo=(archivos:FileList)=>{
    Array.from(archivos).forEach(archivo=>{
        var reader = new FileReader();
        reader.readAsDataURL(archivo);
        reader.onload=(e){
            
            objArchivo = (reader.result as string).split('\n').map((data)=>{
                return data.split(',')
            })
            
        }
        console.log(objArchivo[1]);
    })
    console.log(objArchivo[1]);
}
 */
export const Formulario = () => {

  /*   const [formulario, setformulario] = useState({
        email:'',
        nombre:''
    });

    const handleChange = ({target}:ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = target;
        
        setformulario({
            ...formulario,
            [name]:value
        })
    }
 */

    const {formulario,handleChange,email,nombre,edad} = useForm<FormData>({
        email:'alan@gmail.com',
        nombre:'Alan Galvan',
        edad:45
    });


    const onSubmitFOrm = (e:any)=>{
        e.preventDefauilt();
        fetch('localhost:5400/api/usuarios',{
            method:'POST'
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.success){
                alert('Categoria creada')
            }
        })
        console.log(e)
    }
  
  return (
    <form autoComplete='off' onSubmit={onSubmitFOrm}>
        <div className='mb-3'>
            <label className='form-label'>Email:</label>
            <input type="email"
                className='form-control'
                name='email'
                value={email}
                onChange={handleChange}/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Nombre:</label>
            <input type="text"
                className='form-control'
                name='nombre'
                value={nombre}
                onChange={handleChange}/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Edad:</label>
            <input type="number"
                className='form-control'
                name='edad'
                value={edad}
                onChange={handleChange}/>
        </div>
        <pre>
            {JSON.stringify(formulario)}
        </pre>

        <button value="Enviar"/>
    </form>
    );
};
