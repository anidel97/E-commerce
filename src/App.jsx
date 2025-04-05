import './App.css'
import ResponsiveAppBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
//import { useFetch } from './components/customHooks/useFetch' - por si quiero importar desde Api 
import Loader from './components/loader/Loader'
import Cart from './components/cart/Cart'
import Footer from './components/footer/Footer'
import { useState, useEffect } from 'react'
//?importar routes
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//importar context
import { ShopComponentContext } from './context/ShopContext'

function App() {

  /*para usar el custom hook y traer los productos de la API, validando  y chequeando errores
  const {data, loading, error} = useFetch('https://fakestoreapi.com/products')*/

  const [loading, setLoading] = useState(true); // Estado para controlar el loader

  // Simula una carga inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <Loader loading={loading} />;
  }

  return(
    <ShopComponentContext>
      <BrowserRouter>
        <ResponsiveAppBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/spinner" element={<Loader loading={true}/>}/>
          <Route exact path="/cart" element={<Cart/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ShopComponentContext>
  )
}   

export default App
