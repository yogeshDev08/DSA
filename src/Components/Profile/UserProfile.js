import { Avatar, Card, CardContent } from "@mui/material"
import { Link } from "react-router-dom"
import "../../AppCss/profile.css"
import { useSelector } from "react-redux"

function ManageSkills({ Skills = [] }) {
    return (
        <div className="skill_container">
            <span className="skill_title">Skills:</span>
            <div className="skill_sub_container">
                {
                    Skills.map((e, index) => (
                        <Link to={e.link} key={index} className="skill_link">
                            <span className="skill_text">{e.title} |</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

function Profile() {
    const userData = useSelector(state => state?.mainFeed?.userData)
    const handleConnectionCal = (val) => {
        if (val > 500) {
            return "500+"
        } else {
            return val
        }
    }
    return (
        <Card className="profileContainer">
            <CardContent>
                <div className="profile_name_container">
                    <Avatar alt="Remy Sharp" src={userData?.image} sx={{ marginRight: "1%" }} className="name_avatar"/>
                    <div >
                        <h3 className="profile_name"> {userData?.name} </h3>
                        <h5 className="profile_name">{userData?.username}</h5>
                    </div>
                </div>
                <div className="profile_spain_container">
                    <div className="span_profile_container">
                        <span > Connections </span>
                        <span > {handleConnectionCal(userData?.connection || 0)}</span>
                    </div>
                    <div className="span_profile_container">
                        <span > Followers </span>
                        <span > {handleConnectionCal(userData?.followers || 0)}</span>
                    </div>
                </div>
                <div className="description_container">
                    <span > {userData?.description} </span>
                </div>
                <ManageSkills Skills={userData?.skills} />
            </CardContent>
        </Card>
    )
}

export default Profile