import Header from './components/Header'
import './App.css'

import ShreeHariFooter from './components/Footer/Footer'
import ShreeHariCart from './components/Cart/Cart'
import AllProducts from './components/AllProducts/AllProducts'
import { Route,Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'


function App() {

  return (
    <>
      <Header/>
      
      
   
    <ShreeHariCart></ShreeHariCart>
  
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/products' element={<AllProducts/>}></Route>
   </Routes>

    <ShreeHariFooter></ShreeHariFooter>
    
    
    

    </>
  )
}

export default App
