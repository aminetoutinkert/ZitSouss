import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Product } from '../data/products';

export interface CartItem {
  product: Product;
  sizeIndex: number; // Index of the selected size in product.sizes
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, sizeIndex: number, quantity: number) => void;
  removeFromCart: (productId: string, sizeIndex: number) => void;
  updateQuantity: (productId: string, sizeIndex: number, quantity: number) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, sizeIndex: number, quantity: number) => {
    setItems((prevItems) => {
      // Check if item already exists
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.sizeIndex === sizeIndex
      );

      if (existingIndex > -1) {
        // Update quantity if item exists
        const newItems = [...prevItems];
        newItems[existingIndex].quantity += quantity;
        return newItems;
      } else {
        // Add new item
        return [...prevItems, { product, sizeIndex, quantity }];
      }
    });
  };

  const removeFromCart = (productId: string, sizeIndex: number) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.product.id === productId && item.sizeIndex === sizeIndex)
      )
    );
  };

  const updateQuantity = (productId: string, sizeIndex: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, sizeIndex);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId && item.sizeIndex === sizeIndex
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getCartTotal = useCallback(() => {
    return items.reduce((total, item) => {
      const size = item.product.sizes[item.sizeIndex];
      // Safety check - skip if size doesn't exist
      if (!size) {
        console.error('Invalid size index in cart for product:', item.product.name);
        return total;
      }
      return total + size.price * item.quantity;
    }, 0);
  }, [items]);

  const getCartCount = useCallback(() => {
    return items.reduce((count, item) => count + item.quantity, 0);
  }, [items]);

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartCount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
