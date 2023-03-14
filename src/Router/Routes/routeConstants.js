import { lazy } from "react"

const Home = lazy(() => import("../../Components/MainFeed"))
const Profile = lazy(() => import("../../Components/Profile/UserProfile"))
const Login = lazy(() => import("../../Pages/Authentication/LoginForm"))

const Routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/profile",
        element: <Profile />,
    }
]


export default Routes