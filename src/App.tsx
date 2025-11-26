import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext';
import { ToastProvider } from './contexts/ToastContext';
import { QuickViewProvider } from './contexts/QuickViewContext';
import { router } from './router/router';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <CartProvider>
          <ToastProvider>
            <QuickViewProvider>
              <RouterProvider router={router} />
            </QuickViewProvider>
          </ToastProvider>
        </CartProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
