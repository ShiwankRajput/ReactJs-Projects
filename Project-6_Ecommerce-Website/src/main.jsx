import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import LoginSignUp from './Pages/LoginSignUp.jsx'



let router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [

      {path : "/shop", element: <Shop category="shop"/>},
      {path : "/mens", element: <ShopCategory category="men"/>},
      {path : "/womens", element: <ShopCategory category="women"/>},
      {path : "/kids", element: <ShopCategory category="kid"/>},
      {path : "/product", element: <Product/>},
      {path: "/product/:ProductId", element:<Product/>},
      {path : "/cart", element: <Cart/>},
      {path : "/login", element: <LoginSignUp/>}

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
