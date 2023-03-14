// ** Router imports
import { useEffect } from "react"
import { Navigate, useNavigate, useRoutes } from "react-router-dom"
import Routes from "./Routes/routeConstants"

const Router = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const loction = window.location.pathname
    
    useEffect(() => {
        if (token === undefined || token === null  || token === 'undefined') {
            navigate('/login')
        }
    }, [loction])
    const routes = useRoutes([...Routes])

    return routes
}

export default Router
