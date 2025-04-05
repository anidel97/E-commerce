import { useState, useEffect } from 'react';
import style from './itemListContainer.module.css';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader';
//para usar firebase
import {getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/client';


const ItemListContainer  = ({ greeting }) => {
    /*traer los productos de la API con fetch
    const {data: productos, loading, error} = useFetch('https://fakestoreapi.com/products');*/
    //para hacer el filter de categorias
    const {categoryId} = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        setLoading(true);
        let productsRef = collection(db, 'products');
        //para traer los productos filtrados de firebase
        if (categoryId){
            productsRef = query (
                collection(db, 'products'),
                where ('categoryId', '==', categoryId)
            );
        }
        const data = await getDocs(productsRef);
        const dataFiltrada = data.docs.map( (doc) => ({...doc.data(), id: doc.id}));
        console.log(dataFiltrada);
        setProductos(dataFiltrada);
        setLoading(false);
    }

    // Llamar a los productos cuando el componente se monta
    useEffect(() => {
        getProducts();
    },[categoryId]);
    
    /*para filtrar categorias desde la api fakestoreapi
    if (categoryId){
        return (
            <div className={style["categoriesContainer"]}>
                <h1>{categoryId}</h1>
                <ItemList productos={productos.filter(producto => producto.category === categoryId)}/>
            </div>
        );*/
    
    if (loading){
        return <Loader/>
    }
        
    return (
        <>
        <div className={style["itemListContainer"]}>
            <h1>Hola!{greeting} Bienvenidos a AnDeStudio.</h1>
            {/*<p>Haz tu primera compra y recibe un <span>20% off</span> con envío GRATIS</p>*/}      
        </div>
        <div className= {style["itemList"]}>
            <ItemList productos={productos}/>
        </div>       
        </>
    );   
};  

export default ItemListContainer;