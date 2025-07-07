import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (movie) => {
    const exists = cart.find((item) => item.id === movie.id);
    if (exists) {
      alert('Movie already in cart');
    } else {
      setCart([...cart, { ...movie, quantity: 1 }]);
    }
  };

  const increase = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrease = (id) => {
    setCart(cart.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const remove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, increase, decrease, remove }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
