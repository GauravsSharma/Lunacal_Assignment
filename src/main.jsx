import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from  "react-router-dom"
import About from './components/shared/About.jsx'
import Experience from './components/shared/Experience.jsx'
import Recommended from './components/shared/Recommended.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        path:"/",
        element:<About/>
      },
      {
        path:"/experience",
        element:<Experience/>
      },
      {
        path:"/recommended",
        element:<Recommended/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
