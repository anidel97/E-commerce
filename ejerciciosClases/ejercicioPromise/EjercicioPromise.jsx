const Productos = new Promise((resolve, reject) => {
    const productos = [
        {
            id: 1,
            nombre: 'Sillon',
            descripcion: 'Sillon de 3 cuerpos',
            precio: 1000,
        },
        {
            id: 2,
            nombre: 'Mesa',
            descripcion: 'Mesa de madera',
            precio: 20000,
        }
    ];
    //resolve(productos);
    //reject('No se pudieron cargar los productos');
})

const EjercicioPromise = () => {
    setTimeout(() => {
        Productos.then (misProductos =>{
            console.log(misProductos);
        //para validar si se cargaron los productos
        //productos ? resolve(productos):reject('No se pudieron cargar los productos');
        }).catch(error => {
            console.log(error);
            console.error('No se pudieron cargar los productos');
        });
}, 3000);
}
export default EjercicioPromise;