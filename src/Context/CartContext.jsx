

import React, {

  createContext,

  useContext,

  useEffect,

  useState,

} from "react";
 
const CartContext = createContext(null);
 
export function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {

    try {

      const saved = localStorage.getItem("shreehari-cart");

      return saved ? JSON.parse(saved) : [];

    } catch {

      return [];

    }

  });
 
  const [cartOpen, setCartOpen] = useState(false);
 
  useEffect(() => {

    localStorage.setItem(

      "shreehari-cart",

      JSON.stringify(cartItems)

    );

  }, [cartItems]);
 
  const addToCart = (product) => {

    const size = product.size || "default";

    const cartId = `${product.id}-${size}`;

    const quantity = Math.max(1, Number(product.quantity) || 1);
 
    setCartItems((previous) => {

      const existing = previous.find(

        (item) => item.id === cartId

      );
 
      if (existing) {

        return previous.map((item) =>

          item.id === cartId

            ? {

                ...item,

                quantity: item.quantity + quantity,

              }

            : item

        );

      }
 
      return [

        ...previous,

        {

          ...product,

          id: cartId,

          productId: product.id,

          subtitle: product.subtitle || product.size || "",

          quantity,

        },

      ];

    });
 
    setCartOpen(true);

  };
 
  const updateQuantity = (id, quantity) => {

    setCartItems((previous) =>

      previous.map((item) =>

        item.id === id

          ? {

              ...item,

              quantity: Math.max(1, Number(quantity) || 1),

            }

          : item

      )

    );

  };
 
  const removeFromCart = (id) => {

    setCartItems((previous) =>

      previous.filter((item) => item.id !== id)

    );

  };
 
  const clearCart = () => {

    setCartItems([]);

  };
 
  const cartCount = cartItems.reduce(

    (total, item) => total + item.quantity,

    0

  );
 
  const cartTotal = cartItems.reduce(

    (total, item) => total + item.price * item.quantity,

    0

  );
 
  return (
<CartContext.Provider

      value={{

        cartItems,

        cartOpen,

        setCartOpen,

        addToCart,

        updateQuantity,

        removeFromCart,

        clearCart,

        cartCount,

        cartTotal,

      }}
>

      {children}
</CartContext.Provider>

  );

}
 
export const useCart = () => {

  const context = useContext(CartContext);
 
  if (!context) {

    throw new Error("useCart must be used inside CartProvider");

  }
 
  return context;

};
 
export default CartContext;

 