import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'

/*
const router = createBrowserRouter([
    {
        path: "/recipe/:recipeId",
        element: <Recipe />,
        loader: contactLoader,
    }
])
*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
