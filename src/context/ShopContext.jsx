import { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopComponentContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Función para agregar o restar un producto al carrito
    const addItem = (product, quantity) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                // Si el producto ya está en el carrito, actualiza la cantidad exacta
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity } // Actualiza la cantidad al valor exacto del contador
                        : item
                );
            } else {
                // Agrega si el producto no está en el carrito
                return [...prevCart, { ...product, quantity }];
            }
        });
    };


    // Actualizar la cantidad de un producto en el carrito
    const updateItemQuantity = (id, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Eliminar un producto del carrito
    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Vaciar el carrito
    const clear = () => {
        setCart([]);
    };

    // Contar la cantidad total de productos en el carrito
    const handleCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <ShopContext.Provider
            value={{
                cart,
                setCart,
                addItem,
                updateItemQuantity,
                removeItem,
                clear,
                handleCount,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};