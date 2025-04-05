import { useEffect, useState } from "react";

const EjercicioEventos = () => {
    const [input, setInput]=useState()
    useEffect(() => {
        const onClick = () => {
            console.log('click')
        }
        document.addEventListener('click', onClick)
        return () => {

            document.removeEventListener('click', onClick)
        };
    }, []);
    const valorInput= (evento)=>{
        setInput(evento.target.value);
        console.log(`El valor del input es ${evento.target.value}`);
        
    }
    return (
        <div>
            <h2>termino el evento click</h2>
            <input type="text"
            value={input}
            onChange={valorInput}
            placeholder="Escribe aqui"
            />
        </div>
    );
};
export default EjercicioEventos;