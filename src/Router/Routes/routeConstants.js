import { lazy } from "react"

const Login = lazy(() => import("../../Pages/Authentication/Login"))

const Routes = [
    {
        path: "/login",
        element: <Login />,
        meta: {
            layout: "blank"
        }
    }
]


export default Routes