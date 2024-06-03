'use client'
import { GetTimerQuery, UpdateTimerQuery } from "@/queries/contador";
import { useQuery } from "@tanstack/react-query";

interface TimerData{
    id: string,
    time: number;
}

export default function Timer(){

const contadores: TimerData = useQuery(GetTimerQuery()).data ?? {id: '', time: 0};
console.log(contadores);
const { mutate, isPending, isError, isSuccess, error } = UpdateTimerQuery(); // De esta manera ejecuto la mutación del recurso

const handleMutate = async () => { //Manejamos el estado de la mutación para ejecutarla en el evento click
    try{
        await mutate();
        console.log(mutate);
    
    }catch(error){
        console.error(error);
    }
}

console.log(contadores.time);
return(
<p>hola
<button onClick={handleMutate} disabled={isPending}>
    {isPending ? 'Loading...' : 'Incrementar'}
     </button>
     {contadores.time}
     </p>
)
}
