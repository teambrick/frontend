import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageHandler from './PageHandler'
import Recipe from './components/Recipe'
const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PageHandler />}>
                    <Route path="/recipe" element={<Recipe />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App