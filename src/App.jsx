import Header from './components/Header'
import './App.css'
import Hero from './components/hero/Hero'
import Categories from './components/categories/Categories'
import Banner from './components/Banner/Banner'
import FeaturedProducts from './components/Products/Products'
import ScentedAgarbatti from './components/Agarbatti/Agarbatti'
import ShreeHariFooter from './components/Footer/Footer'


function App() {

  return (
    <>
      <Header/>
      <Hero></Hero>
    <Categories></Categories>
    <Banner/>
    <FeaturedProducts></FeaturedProducts>
    <ScentedAgarbatti></ScentedAgarbatti>
    <ShreeHariFooter></ShreeHariFooter>
   
    <h6></h6>
    
    

    </>
  )
}

export default App
