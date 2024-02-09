
import { Outlet } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'


const PageHandler = () => {
    return (
        <div className="min-h-screen w-full">
            <NavigationBar />
            <Outlet />
        </div>

    )
}

export default PageHandler
