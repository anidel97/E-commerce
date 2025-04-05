// Para usar Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';
import { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import ItemCount from '../itemCount/ItemCount'; 
import Loader from '../loader/Loader'; 
import style from './cart.module.css';
import { useNavigate } from 'react-router-dom';
//Para importar toast
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const { cart, clear, removeItem, updateItemQuantity } = useContext(ShopContext);
    const [showForm, setShowForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar el spinner
    const [buyer, setBuyer] = useState({
        nameBuyer: '',
        phone: '',
        email: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };

    const CreateOrder = () => {
        if (cart.length === 0) {
            toast.error("El carrito está vacío. Agrega productos antes de finalizar la compra.");
            return;
        }

        setIsLoading(true); // Activa el spinner

        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const order = {
            buyer,
            items: cart.map((item) => ({
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                price: item.price,
            })),
            total,
        };

        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order)
            .then(({ id }) => {
                setIsLoading(false); // Desactiva el spinner
                toast.success(`Orden creada con éxito. ID: ${id}`); // Muestra el toast con el ID
                clear();
                setShowForm(false);
            })
            .catch((error) => {
                setIsLoading(false); // Desactiva el spinner
                toast.error("Hubo un error al crear la orden. Intenta nuevamente."); // Muestra un toast de error
            });
    };

    return (
        <div className={style["cartStyle"]}>
            <ToastContainer position="bottom-right" />
            {isLoading ? (
                <Loader /> // Muestra el spinner mientras isLoading es true
            ) : (
                <>
                    {cart.length === 0 ? (
                        <div className={style["emptyCartStyle"]}>
                            <p >El carrito está vacío</p>
                            <button className={style["volverAInicio"]} onClick={()=> navigate(`/`)}>AnDeStudio.</button>
                        </div>
                    ) : (
                        <>
                            <h2>Carrito de compras</h2>
                            <ul>
                                {cart.map((item) => (
                                    <li key={item.id}>
                                        <p>{item.title}</p>
                                        <p>Precio unitario: ${item.price}</p>
                                        <ItemCount
                                            count={item.quantity}
                                            setCount={(newQuantity) => updateItemQuantity(item.id, newQuantity)}
                                        />
                                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                                    </li>
                                ))}
                            </ul>
                            <p className={style["cartTotal"]}>
                                Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                            </p>
                            {!showForm ? (
                                <div className={style["closeCartButton"]}>
                                    <button onClick={clear}>Vaciar carrito</button>
                                    <button onClick={() => setShowForm(true)}>Finalizar compra</button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        CreateOrder();
                                    }}
                                    className={style["orderForm"]}
                                >
                                    <h3>Datos del comprador</h3>
                                    <div>
                                        <label htmlFor="nameBuyer">* Nombre:</label>
                                        <input
                                            type="text"
                                            id="nameBuyer"
                                            name="nameBuyer"
                                            value={buyer.nameBuyer}
                                            onChange={handleInputChange}
                                            placeholder="Escriba su nombre"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">* Teléfono:</label>
                                        <input
                                            type="number"
                                            id="phone"
                                            name="phone"
                                            value={buyer.phone}
                                            onChange={handleInputChange}
                                            placeholder="Escriba su número de teléfono"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">* Correo electrónico:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={buyer.email}
                                            onChange={handleInputChange}
                                            placeholder="Escriba su email"
                                            required
                                        />
                                    </div>
                                    <div className={style["finishOrderButton"]}>
                                        <button type="button" onClick={() => setShowForm(false)}>
                                            Cancelar
                                        </button>
                                        <button type="submit" >Confirmar compra</button>
                                    </div>
                                </form>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Cart;