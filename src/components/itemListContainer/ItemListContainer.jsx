import { useEffect } from 'react';
import style from './itemListContainer.module.css';
import {useFetch} from '../customHooks/useFetch';
import { useNavigate } from 'react-router-dom';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer  = ({ greeting }) => {
    //traer los productos de la API
    const {data: productos, loading, error} = useFetch('https://fakestoreapi.com/products');
    const navigate = useNavigate();
    //para hacer el filter de categorias
    const {categoryId} = useParams();
    if (loading){
        return <p>Cargando... </p>
    }
    if (error){
        return <p>Hubo un error</p>
    }
    if (categoryId){
        return (
            <div className={style["categoriesContainer"]}>
                <h1>{categoryId}</h1>
                <ItemList productos={productos.filter(producto => producto.category === categoryId)}/>
            </div>
        );
    }

    return (
        <>
        <div className={style["itemListContainer"]}>
            <h1>Hola!{greeting} Bienvenidos a AnDeStudio.</h1>
            <p>Haz tu primera compra y recibe un <span>20% off</span> con envío GRATIS</p>        
        </div>
        <div className= {style["itemList"]}>
            <ItemList productos={productos}/>
        </div>       
        </>
    );   
    
}
export default ItemListContainer;