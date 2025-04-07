import Badge from '@mui/material/Badge';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link, useLocation } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../../context/ShopContext';
import style from './cartWidget.module.css';
const CartWidget = () => {
    const { cart, handleCount } = useContext(ShopContext); // Obtener el carrito y handleCount del contexto
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para manejar la visibilidad del dropdown
    const location = useLocation(); // Hook para detectar cambios en la ruta

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState); // Alterna la visibilidad del dropdown
    };

    // Cerrar el dropdown cuando cambia la ruta
    useEffect(() => {
        setIsDropdownOpen(false); // Cerrar el dropdown al cambiar de sección
    }, [location]);

    return (
        <div className={style["cartWidgetContainer"]}>
            <div onClick={toggleDropdown} className={style["cartWidgetButton"]}>
                <Badge badgeContent={handleCount() || 0} color="success">
                    <LocalMallOutlinedIcon color="action" />
                </Badge>
            </div>
            {isDropdownOpen && (
                <div className={style["dropdown"]}>
                    {cart.length > 0 ? (
                        <>
                            <ul>
                                {cart.map((producto) => (
                                    <li key={producto.id} className={style["dropdownItem"]}>
                                        <p><span>{producto.title}</span></p>
                                        <img src={producto?.image} alt={producto?.title}/>
                                        <p>Cantidad: {producto.quantity}</p>
                                        <p>Precio: ${producto.price}</p>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/cart" className={style["viewCartButton"]}>
                                Ver carrito
                            </Link>
                        </>
                    ) : (
                        <p className={style["emptyCart"]}>El carrito está vacío</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default CartWidget;