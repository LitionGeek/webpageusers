import { Timer } from './Timer';
import { useState } from 'react';

export const TimerPadre = () => {

    const [miliseundos, setmiliseundos] = useState(1000);

  return (
        <>   
            <span>Milisegundos {miliseundos}</span>
            <br/>
            <button className='btn btn-outline-success'
                onClick={()=>setmiliseundos(1000)}>
                1000
            </button>
            <button className='btn btn-outline-success'
                onClick={()=>setmiliseundos(2000)}>
                2000
            </button>
            <Timer miliseundos={miliseundos}/>
        </>
    );
};
