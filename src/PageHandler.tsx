
import { Outlet } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'


const PageHandler = () => {
    return (
        <div>
            <div className="min-h-screen">
                <NavigationBar />
                <Outlet />
            </div>
        </div>

    )
}

export default PageHandler
