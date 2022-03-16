import { useState } from 'react';

interface User {
    uid:string;
    name:string;
}

const tempUser:User = {
    uid:'dsadas',
    name:'Franco'
}

export const Usuario = () => {
  
    const [user, setuser] = useState<User>(tempUser) ;

    const login = ()=>{
        setuser({
            uid:'ABCD',
            name:'Alan Galvan'
        })
    }

    return( 
        <div className='mt-5'>
            <h3>Usuario : useState</h3>
            <button 
                className='btn btn-outline-primary'
                onClick={login}>
                Login
            </button>
            {
                (!user)
                    ? <pre>No hay usuario</pre>
                    : <pre>{JSON.stringify(user)}</pre> 
            }
        </div>
    );

};
