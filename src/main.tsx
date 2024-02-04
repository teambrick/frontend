import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Recipe, {loader as contactLoader} from './components/recipe.tsx'

const router = createBrowserRouter([
    {
        path: "/recipe/:recipeId",
        element: <Recipe />,
        loader: contactLoader,
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
