import React from 'react'


export const InputFile = (usuario) => {
  console.log('Otro componente '+usuario)
  return (
    <ul>
      {usuario.map(item => (
        <li key={item.id}>
          {item.name} {item.price}
        </li>
      ))}
    </ul>
  )
}


