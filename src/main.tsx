import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import '../app/globals.css'
import Recipe, {loader as recipeLoader} from './components/Recipe.tsx';
import React from 'react';
import PageHandler from './PageHandler.tsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <PageHandler />,
        children: [
        {
            path: "/recipe/:recipeId",
            element: <Recipe />,
            loader: recipeLoader,
        },],
    }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
