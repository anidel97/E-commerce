# AnDeStudio.

Este proyecto es un e-commerce desarrollado con React.js como proyecto final del curso de React.js. El objetivo principal es ofrecer una experiencia de compra en línea, donde los usuarios puedan explorar productos, agregarlos al carrito, gestionar cantidades y finalizar su compra.

### Características Principales
Listado de productos: Visualización de productos disponibles con detalles como título, precio e imagen.
Filtrado de productos: Visualización de productos disponibles según la categoría a la que pertenezcan. 
Detalle del producto: Página individual para cada producto con información detallada.
Carrito de compras:
Agregar productos al carrito.
Actualizar la cantidad de productos directamente desde el carrito.
Eliminar productos del carrito.
Visualizar el total de la compra.
Formulario de compra: Permite al usuario ingresar sus datos para finalizar la compra.
Spinner de carga: Indicador visual mientras se cargan los datos.

### Tecnologías Utilizadas
Frontend:
React.js
CSS Modules para estilos personalizados.
Material-UI (MUI) para componentes como el spinner de carga.
Backend:
Firebase Firestore para la gestión de datos (productos y órdenes).
Herramientas de desarrollo:
Vite para el entorno de desarrollo rápido.
Visual Studio Code como editor de código.

### Instalación y Configuración

1| Clonar el repositorio:
git clone https://github.com/anidel97/E-commerce.git
`cd mi-ecommerce`

2| Instalar dependencias:
`npm install`

3| Configurar Firebase:
Crear un proyecto en Firebase.
Configurar Firestore y agregar las credenciales en client.js:
```
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
    apiKey: "AIzaSyDOu8rZeYXE7qVgy3I0SIJBzv3mYO8h2TU",
    authDomain: "mi-e-commerce-fe693.firebaseapp.com",
    projectId: "mi-e-commerce-fe693",
    storageBucket: "mi-e-commerce-fe693.firebasestorage.app",
    messagingSenderId: "980839064924",
    appId: "1:980839064924:web:9addee0dc103fed38d0d99"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```
4| Iniciar el servidor de desarrollo:
`npm run dev`

5| Abrir en el navegador:
Ir a http://localhost:5173 para ver la aplicación en funcionamiento.

### Uso del Proyecto
1| Explorar productos:
Navega por la lista de productos disponibles.

2| Agregar al carrito:
Haz clic en "Agregar al carrito" desde la página de detalles del producto.

3| Gestionar el carrito:
Cambia la cantidad de productos o elimínalos directamente desde el carrito.

4| Finalizar compra:
Completa el formulario de compra y envía la orden.

### Estilos Personalizados
Los estilos están organizados en CSS Modules serparados por componentes para su facil utilización y corrección.
