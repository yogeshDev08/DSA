import { Button, Card, CardContent, Input } from "@mui/material"
import { useState } from "react"

const data = [
    {
        "title": "ctions 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the the",
        "name": "Coder",
        "data": "16-1-2023"
    },
    {
        "title": "has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englis",
        "name": "Coder",
        "data": "16-1-2023"
    },
    {
        "title": " majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a",
        "name": "Coder",
        "data": "16-1-2023"
    },
    {
        "title": "in words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 ",
        "name": "Coder",
        "data": "16-1-2023"
    },
    {
        "title": " centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was po",
        "name": "Coder",
        "data": "16-1-2023"
    },
    {
        "title": "tters, as opposed to using 'Content here, content here', making it look li",
        "name": "Coder",
        "data": "16-1-2023"
    }, {
        "title": "ctions 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the the",
        "name": "Coder",
        "data": "16-1-2023"
    },
    {
        "title": "has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englis",
        "name": "Coder",
        "data": "16-1-2023"
    },
    {
        "title": " majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a",
        "name": "Coder",
        "data": "16-1-2023"
    },
    {
        "title": "in words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 ",
        "name": "Coder",
        "data": "16-1-2023"
    },
    {
        "title": " centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was po",
        "name": "Coder",
        "data": "16-1-2023"
    },
    {
        "title": "tters, as opposed to using 'Content here, content here', making it look li",
        "name": "Coder",
        "data": "16-1-2023"
    },
    {
        "title": "has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englis",
        "name": "Coder",
        "data": "16-1-2023"
    },
    {
        "title": " majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a",
        "name": "Coder",
        "data": "16-1-2023"
    },
    {
        "title": "in words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 ",
        "name": "Coder",
        "data": "16-1-2023"
    }
]
const HomePage = () => {
    const [value, setValue] = useState("")
    const [list, setList] = useState(data)

    const handleAdd = () => {
        const date = new Date()
        setList([{
            title: value,
            name: "Coder",
            data: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
        }, ...list])
        setValue("")
    }
    return (
        <ul>
            <Card style={{ backgroundColor: "#AAB8C2", maxWidth: "30%", position: "relative", left: "36%" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1>Fweeter</h1>
                </div>
                <CardContent >
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Input style={{ backgroundColor: "#657786", marginRight: "2%", padding: "2%", width: "100%" }} value={value} onChange={(e) => setValue(e.target.value)} />
                        <Button variant="contained" onClick={handleAdd}>Add</Button>

                    </div>
                    {list.map((item, index) => (
                        <Card key={index} style={{ backgroundColor: "#E1E8ED", marginTop: "2%" }}>
                            <CardContent>
                                <div>
                                    <h4> {item.title} </h4>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <h6> {item.name} </h6>
                                        <span> {item.data} </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                    }
                </CardContent>
            </Card>
        </ul >
    )
}

export default HomePage