import {useState} from "react";
import style from './itemCount.module.css'


const ItemCount = ({count, setCount}) => {
    //const [count, setCount] = useState(1); se saca el estado del contador aca, el estado se usa en el componente que lo utilizará

    const sumarContador = () => {
        setCount ( count + 1);
    };
    const restarContador = () => {
        setCount ( count > 1 ? count - 1 : count); // Evita valores menores que 1
    }
    return (
        <div className={style["itemCount"]}>
            <button onClick={restarContador}>-</button>
            <p>{count}</p>
            <button onClick={sumarContador}>+</button>
        </div>
    );
}

export default ItemCount;