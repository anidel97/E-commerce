import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './ItemDetail.module.css';
const ItemDetail = ({ producto }) => {
    const navigate = useNavigate();
    return (
        <div className={style["ItemDetail"]}>
            <img src={producto.image} alt={producto.title} className={style["imgItemDetail"]}/>
            <p className={style["categoriaItemDetail"]}>{producto.category}</p>
            <h2 className={style["tituloItemDetail"]}>{producto.title}</h2>
            <p className={style["precioItemDetail"]}>$ {producto.price}</p>
            <p className={style["descripcionItemDetail"]}>{producto.description}</p>
            <button className={style["botonItemDetail"]}>Agregar al carrito</button>
        </div>
    );
}

export default ItemDetail;