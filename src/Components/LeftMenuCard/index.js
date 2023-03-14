import { Card, CardContent } from "@mui/material"
import TagIcon from '@mui/icons-material/Tag';
import SettingsIcon from '@mui/icons-material/Settings';
import '../../AppCss/leftcard.css'

function LeftMenuCard() {
    return (
        <Card className="leftContainer">
            <CardContent className="main_container">
                <div className="sub_container">
                    <TagIcon fontSize="large" />
                    <span className="title">Hastags</span>
                </div>
                <div className="sub_container">
                    <SettingsIcon fontSize="large" />
                    <span className="title">Settings</span>
                </div>
            </CardContent>
        </Card>
    )
}

export default LeftMenuCard