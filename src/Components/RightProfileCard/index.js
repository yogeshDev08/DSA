import { Card, CardContent } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginManage } from "../../Pages/Authentication/ownStore";

function RightProfileCard() {
    const userData = useSelector(state => state?.mainFeed?.userData)
    const dispatch = useDispatch()
    const handleConnectionCal = (val) => {
        if (val > 500) {
            return "500+"
        } else {
            return val
        }
    }

    const handleUserData = async () => {
        const token = localStorage.getItem('token')
        const res = await axios.get(`http://172.16.11.18:5000/users/${token}`)
        if (res.status === 200) {
            dispatch(loginManage(res?.data?.data))
        }
    }
    useEffect(() => {
        handleUserData()
    }, [])
    return (
        <Card className="rightContainer">
            <CardContent>
                <div className="name_container">
                    <Avatar alt="Remy Sharp" src={userData?.image} sx={{ marginRight: "5%" }} />
                    <div >
                        <h3 className="name"> {userData?.name} </h3>
                        <h5 className="name">{userData?.username}</h5>
                    </div>
                </div>
                <div className="span_container">
                    <span className="span_description"> {userData?.description}</span>
                </div>
                <div className="footer_spain_container">
                    <div className="span_container">
                        <span className="span_text"> Connections </span>
                        <span className="span_text"> {handleConnectionCal(userData?.connection || 0)} </span>
                    </div>
                    <div className="span_container">
                        <span className="span_text"> Followers </span>
                        <span className="span_text"> {handleConnectionCal(userData?.followers || 0)} </span>
                    </div>
                    <div className="span_container">
                        <Link to="/profile">
                            <span className="span_text"> visit to Profile </span>
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    )

}

export default RightProfileCard