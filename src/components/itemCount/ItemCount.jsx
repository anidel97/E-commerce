import {useState} from "react";



const ItemCount = () => {
    const [count, setCount] = useState(1);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}

export default ItemCount;