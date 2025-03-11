/*va a ser la card del producto, el estilo de la card y el CONTADOR*/
import { useNavigate } from 'react-router-dom';
import style from './item.module.css';

const Item = ({ producto }) => {
    const navigate = useNavigate();
    return (
        <div key={producto.id} className={style["tarjetas"]} >	
            <h2>{producto.title}</h2>
            <img src={producto.image} alt={producto.title} />
            <p>$ {producto.price}</p>
            <button onClick= {()=> navigate(`/item/${producto.id}`)}>Saber más</button>
        </div>
    );
}
export default Item;

//EL NAVIGATE VA EN EL BOTON DE VER MAS O VER DETALLES - PROBAR CUANDO ANDE EL SITIO