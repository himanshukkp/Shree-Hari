

import Header from "./components/Header";

import "./App.css";
 
import ShreeHariFooter from "./components/Footer/Footer";

import ShreeHariCart from "./components/Cart/Cart";

import AllProducts from "./components/AllProducts/AllProducts";
 
import { Route, Routes } from "react-router-dom";
 
import Home from "./components/pages/Home/Home";

import Product from "./components/productpage/Productpage";
 
import { useCart } from "./Context/CartContext";
import ScrollToTop from "./ScrolltoTop";
 
function App() {

  const {

    cartItems,

    cartOpen,

    setCartOpen,

    addToCart,

    updateQuantity,

    removeFromCart,

  } = useCart();
 
  return (
<>

<ScrollToTop></ScrollToTop>
<Header />
 
      <ShreeHariCart

        open={cartOpen}

        onClose={() => setCartOpen(false)}

        items={cartItems}

        onQuantityChange={updateQuantity}

        onRemove={removeFromCart}

      />
 
      <Routes>
<Route

          path="/"

          element={<Home onAddToCart={addToCart} />}

        />
 
        <Route

          path="/products"

          element={<AllProducts onAddToCart={addToCart} />}

        />
 
        <Route

          path="/product/:id"

          element={<Product onAddToCart={addToCart} />}

        />
</Routes>
 
      <ShreeHariFooter />
</>

  );

}
 
export default App;

 