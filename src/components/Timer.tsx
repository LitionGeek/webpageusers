import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

type TimerArgs = {
    miliseundos:number
}

export const Timer = ({miliseundos}:TimerArgs) => {
    console.log(miliseundos)
    
    const [segundos, setsegundos] = useState(0);
    const ref = useRef<NodeJS.Timeout>();

    useEffect(()=>{
        ref.current && clearInterval(ref.current);

        console.log('useEffect')
        
        ref.current = setInterval(()=>setsegundos(s=>s+1),miliseundos);
    },[miliseundos])

  return (
    <>
        <h4>Timer: <small>{segundos}</small></h4>
    </>
    );
};
