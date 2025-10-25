import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css" 
import "bootstrap/dist/js/bootstrap.min.js" 
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import { BasketProvider } from './context/BasketContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <BasketProvider>
  <ProductProvider>
    <App />
    <ToastContainer autoClose={2000} position= "bottom-right"/>
  </ProductProvider>
  </BasketProvider>
  
)
