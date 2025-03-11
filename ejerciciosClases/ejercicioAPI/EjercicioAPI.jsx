import { useEffect, useState } from "react";

const EjercicioAPI = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => {
                /*console.log('Response:', res);*/
                return res.json();
            })
            .then(json => {
                console.log('JSON:', json);
                setProductos(json);
            })
            .catch(err => console.log('Error:', err))
            .finally(() => console.log('Finalizado'));
    }, []);

    /*console.log('Productos state:', productos);*/

    return (
        <div>
            {productos?.map((producto) => (
                <div key={producto.id}>
                    <h2>{producto.title}</h2>
                    <p>{producto.price}</p>
                    <img src={producto.image} alt={producto.title} />
                </div>
            ))}
        </div>
    );
}

export default EjercicioAPI;
