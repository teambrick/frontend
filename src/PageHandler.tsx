
import { Outlet } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'


const PageHandler = () => {
    return (
        <div>
            <div className="h-screen">
                <NavigationBar />
                <Outlet />
            </div>
        </div>

    )
}

export default PageHandler