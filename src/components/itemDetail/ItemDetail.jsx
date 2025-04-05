import { useNavigate } from 'react-router-dom';
import style from './ItemDetail.module.css';
import { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({ producto }) => {
    const navigate = useNavigate();
    const { addItem } = useContext(ShopContext); // Para obtener addItem del contexto
    const [count, setCount] = useState(1); // Inicializa count como 1

    // Función para manejar la cantidad seleccionada desde ItemCount
    const handleAddToCart = () => {
        if (count > 0) {
            addItem(producto, count); // Agrega el producto con la cantidad seleccionada
        }
    };

    return (
        <div className={style["ItemDetail"]}>
            <img src={producto?.image} alt={producto?.title} className={style["imgItemDetail"]} />
            <p className={style["categoriaItemDetail"]}>{producto?.categoryId}</p>
            <h2 className={style["tituloItemDetail"]}>{producto?.title}</h2>
            <p className={style["precioItemDetail"]}>$ {producto?.price}</p>
            <p className={style["descripcionItemDetail"]}>{producto?.description}</p>
            <ItemCount setCount={setCount} count={count} />
            <button onClick={handleAddToCart} className={style["botonItemDetail"]}>
                Agregar al carrito
            </button>
            <div className={style["botonDeAccion"]}>
                <button onClick={() => navigate('/')} className={style["botonSeguir"]}>
                    Seguir comprando
                </button>
                <button onClick={() => navigate('/cart')} className={style["botonFinalizar"]}>
                    Finalizar compra
                </button>
                
            </div>
        </div>
    );
};

export default ItemDetail;