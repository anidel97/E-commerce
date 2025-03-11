import './App.css'
import ResponsiveAppBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import { useFetch } from './components/customHooks/useFetch'

//?importar routes
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  //para usar el custom hook y traer los productos de la API, validando  y chequeando errores
  const {data, loading, error} = useFetch('https://fakestoreapi.com/products')
  console.log(data)
  
  if (loading){
    return <p>Cargando...</p>
  }
  if (error){
    return <p>Hubo un error</p>
  }
  return(
    <>
    <BrowserRouter>
      <ResponsiveAppBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}   

export default App
