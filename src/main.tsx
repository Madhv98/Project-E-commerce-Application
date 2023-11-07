import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/home-page'
import LoginPage from './pages/login-page'
import Products from './components/products'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage />
    <Products/>
    <LoginPage/>
    
  </React.StrictMode>,
)
