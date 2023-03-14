import { Avatar, Button, Card, CardContent, Input } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, Navigate, useNavigate } from "react-router-dom"
import '../../AppCss/login.css'
import { showError, showSuccess } from "../../Helper/toastHelper"
import { loginManage } from "./ownStore"

const login = { email: '', password: '' }
const singup = { name: '', username: '', email: '', password: '' }

function LoginForm() {
    const [userloginData, setUserLoginData] = useState({ email: '', password: '' })
    const [usersigninData, setUsersigninData] = useState({ name: '', username: '', email: '', password: '' })
    const [page, setPage] = useState('login')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.removeItem('token')
    }, [])

    const handleErr = (obj) => {
        let check = true
        const array = Object.keys(obj)
        array.forEach(element => {
            if (obj[element] === '') {
                check = false
            }
        });
        if (check) {
            return true
        } else {
            showError(`Please Fill the Form`)
            return false
        }
    }

    const handleLogin = async () => {
        if (handleErr(userloginData)) {
            const res = await axios.post("http://172.16.11.18:5000/users/login", userloginData)
            if (res.data.data) {
                localStorage.setItem("token", res.data.data.id)
                dispatch(loginManage(res.data.data))
                showSuccess('user login successfully')
                navigate('/')
            } else {
                showError(res.data.msg)
            }
        }
    }

    const handleSingup = async () => {
        if (handleErr(usersigninData)) {
            const res = await axios.post("http://172.16.11.18:5000/users/", usersigninData)
            if (res.data.data) {
                localStorage.setItem("token", res.data.data.id)
                showSuccess('user created successfully')
                dispatch(loginManage(res.data.data))
                navigate('/')
            } else {
                showError(res.data.msg)
            }
        }
    }



    if (page === 'login') {
        return (
            <div className="main_login_container">
                <Card className="login_container">
                    <CardContent>
                        <div>
                            <div style={{ marginTop: "1%" }}>
                                <label>Email</label>
                                <Input className="form_inpit" disableUnderline={true} value={userloginData?.email} onChange={(e) => setUserLoginData({ email: e.target.value, password: userloginData?.password })} />
                            </div>
                            <div style={{ marginTop: "1%" }}>
                                <label>Password</label>
                                <Input className="form_inpit" disableUnderline={true} value={userloginData?.password} onChange={(e) => setUserLoginData({ email: userloginData?.email, password: e.target.value })} />
                            </div>
                        </div>
                        <div style={{ marginTop: "3%" }}>
                            <Button variant="contained" onClick={() => handleLogin()} style={{ marginRight: "3%" }}> Login </Button>
                            <Button variant="contained" onClick={() => {
                                setPage('signup')
                                setUsersigninData(singup)
                            }}> Sign-up </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )

    } else {
        return (
            <div className="main_login_container">
                <Card className="login_container">
                    <CardContent>
                        <div>
                            <div style={{ marginTop: "1%" }}>
                                <label>Name</label>
                                <Input
                                    className="form_inpit" disableUnderline={true}
                                    value={usersigninData?.name}
                                    onChange={(e) => setUsersigninData({
                                        name: e.target.value,
                                        username: usersigninData?.username,
                                        email: usersigninData?.email,
                                        password: usersigninData?.password
                                    })} />
                            </div>
                            <div style={{ marginTop: "1%" }}>
                                <label>UserName</label>
                                <Input
                                    className="form_inpit" disableUnderline={true}
                                    value={usersigninData?.username}
                                    onChange={(e) =>
                                        setUsersigninData({
                                            name: usersigninData?.name,
                                            username: e.target.value,
                                            email: usersigninData?.email,
                                            password: usersigninData?.password
                                        })} />
                            </div>

                            <div style={{ marginTop: "1%" }}>
                                <label>Email</label>
                                <Input
                                    className="form_inpit" disableUnderline={true}
                                    value={usersigninData?.email}
                                    onChange={(e) =>
                                        setUsersigninData({
                                            name: usersigninData?.name,
                                            username: usersigninData?.username,
                                            email: e.target.value,
                                            password: usersigninData?.password
                                        })} />
                            </div>
                            <div style={{ marginTop: "1%" }}>
                                <label>Password</label>
                                <Input
                                    className="form_inpit" disableUnderline={true}
                                    value={usersigninData?.password}
                                    onChange={(e) =>
                                        setUsersigninData({
                                            name: usersigninData?.name,
                                            username: usersigninData?.username,
                                            email: usersigninData?.email,
                                            password: e.target.value
                                        })} />
                            </div>
                        </div>
                        <div style={{ marginTop: "3%" }}>
                            <Button variant="contained" onClick={() => handleSingup()} style={{ marginRight: "3%" }}> Sign-UP </Button>
                            <Button variant="contained" onClick={() => {
                                setPage('login')
                                setUserLoginData(login)
                            }}> login </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default LoginForm