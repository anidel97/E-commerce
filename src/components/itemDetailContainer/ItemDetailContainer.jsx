import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";
import Loader from "../loader/Loader"; 
//importar toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Importaciones necesarias desde Firebase
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/client";

const ItemDetailContainer = () => {
    const { id } = useParams(); // Obtener el ID del producto desde la URL
    const [producto, setProducto] = useState(null); // Estado para almacenar el producto
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [error, setError] = useState(false); // Estado para manejar errores

    const getProduct = () => {
        const productRef = doc(db, "products", id); // Referencia al documento en Firestore

        getDoc(productRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setProducto({ id: snapshot.id, ...snapshot.data() }); // Guarda el producto en el estado
                } else {
                    setError(true); // Marca error si el producto no existe
                    toast.error("No se encontró el producto.", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            .catch((error) => {
                console.error("Error al obtener el producto:", error);
                setError(true);
                toast.error("Hubo un error al cargar el producto.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .finally(() => {
                setLoading(false); // Finaliza el estado de carga
            });
    };

    useEffect(() => {
        getProduct();
    }, [id]); // Ejecuta el efecto cuando cambia el ID

    if (loading) {
        return <Loader />; // Muestra el spinner mientras carga
    }

    if (error) {
        return (
            <div>
                <ToastContainer />
                <p>Hubo un error al cargar el producto.</p>
            </div>
        );
    }

    return (
        <ItemDetail producto={producto} /> // Renderiza el detalle del producto
    );
};

export default ItemDetailContainer;