import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import '../app/globals.css'
import Recipe, {loader as recipeLoader} from './components/Recipe.tsx';
import React from 'react';
import PageHandler from './PageHandler.tsx';
import { GlobalContext, ThemeProvider } from './context.tsx';


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
        <ThemeProvider defaultTheme='system' storageKey='ui-theme'>
            <GlobalContext.Provider value={{"brand":{"name":"NAME-CHANGE-LATER", "tagline":"Improve your community's nutrition", "desc":"The solution to nutritional tracking, & helping others."}}}>
                <RouterProvider router={router} />
            </GlobalContext.Provider>
        </ThemeProvider>
    </React.StrictMode>
)
