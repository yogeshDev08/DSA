import { Button, Card, CardContent, Input } from "@mui/material"
import { useEffect, useState } from "react"
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../Pages/Authentication/ownStore";
import axios from "axios";

function TwitteCard({ item }) {
    return (
        <Card style={{ backgroundColor: "#E1E8ED", marginTop: "2%" }}>
            <CardContent>
                <div className="user_container">
                    <Avatar alt="Remy Sharp" sx={{ marginRight: "5%" }} />
                    <div >
                        <h3 className="name"> {item?.user?.name} </h3>
                        <h5 className="name">{item?.user?.username}</h5>
                    </div>
                </div>

                <div className="tweet_container">
                    <span className="tweet_span"> {item?.content} </span>
                    <div className="user_action_container">
                        {item?.createdAt.split('T')[0]}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

const MainTweeterFeed = () => {
    const [value, setValue] = useState("")
    const [list, setList] = useState([])
    const dispatch = useDispatch()
    const storeData = useSelector(state => state?.mainFeed?.allData)
    const userData = useSelector(state => state?.mainFeed?.userData)
    const handleAdd = async () => {
        if (value) {
            const res = await axios.post("http://172.16.11.18:5000/fweets/", { content: value, user: userData.id })
            if (res.status === 200) {
                dispatch(getAllData())
            }
            setValue("")
        }
    }

    useEffect(() => {
        if (storeData.length > 0) {
            setList(storeData)
        }
    }, [storeData])

    useEffect(() => {
        dispatch(getAllData())
    }, [])
    return (
        <Card className="centerContainer">
            <CardContent >
                <div className="feed_container">
                    <Input placeholder="lets tweet" className="search_Input" disableUnderline={true} value={value} onChange={(e) => setValue(e.target.value)} />
                    <Button variant="contained" onClick={handleAdd}>Add</Button>
                </div>
                {list.map((item, index) => (
                    <TwitteCard item={item} key={index} />
                ))
                }
            </CardContent>
        </Card>
    )
}

export default MainTweeterFeed