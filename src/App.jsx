import './App.css'
import ResponsiveAppBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  return(
    <>
    <ResponsiveAppBar />
    <ItemListContainer greeting="María"/>
    </>
  )
}   

export default App
