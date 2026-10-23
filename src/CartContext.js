import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'coffeeshops-cart';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => setCart(current => {
    const existing = current.find(item => item.id === product.id);
    return existing
      ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...current, { ...product, quantity: 1 }];
  });
  const updateQuantity = (id, quantity) => setCart(current =>
    quantity <= 0 ? current.filter(item => item.id !== id) :
      current.map(item => item.id === id ? { ...item, quantity } : item)
  );
  const removeFromCart = (id) => setCart(current => current.filter(item => item.id !== id));
  const clearCart = () => setCart([]);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const value = useMemo(() => ({ cart, addToCart, updateQuantity, removeFromCart, clearCart, itemCount, total }), [cart, itemCount, total]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
}
