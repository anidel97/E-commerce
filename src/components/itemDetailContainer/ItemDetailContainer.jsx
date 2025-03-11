import { useEffect } from "react";
import { useFetch } from "../customHooks/useFetch";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = ({unproducto}) => {
    const { id } = useParams();
    const {data, loading} = useFetch(`https://fakestoreapi.com/products/${id}`);
    if (loading){
        return (
            <p>Cargando...</p>
        );
    }
    return (
        <ItemDetail producto={data} />
        /*<div>
            <h2>{unproducto.title}</h2>
            <p>{unproducto.price}</p>
            <img src={unproducto.image} alt={unproducto.title} />
            <p>{unproducto.description}</p>
        </div>*/
    );
}
    //const [unproducto, setProducto] = useState([]);
    //const PromesaProducto = new Promise((resolve, reject) => {
        /*useEffect(() => {
                fetch('https://fakestoreapi.com/products?limit=1')
                    .then(res => {
                        /*console.log('Response:', res);*/
                        //return res.json();
                    //})
                    /*.then(json => {
                        console.log('JSON:', json);
                        setProducto(json);
                    })
                    .catch(err => console.log('Error:', err))
                    .finally(() => console.log('Finalizado'));
            }, []);
        });
        setTimeout(() => {
            PromesaProducto ? resolve(unproducto) : reject('No se pudieron cargar los productos');
        }, 2000);
}   */
export default ItemDetailContainer;