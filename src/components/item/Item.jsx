/* Card del producto, el estilo de la card*/
import { useNavigate } from 'react-router-dom';
import style from './item.module.css';


const Item = ({ producto }) => {
    const navigate = useNavigate();
    return (
        <div key={producto.id} className={style["tarjetas"]} >	
            <img src={producto.image} alt={producto.title} />
            <h2>{producto.title}</h2>
            <p>$ {producto.price}</p>
            <button onClick= {()=> navigate(`/item/${producto.id}`)}>Saber más</button>
            
        </div>
        
    );
}

export default Item;