import '../../AppCss/navBar.css'
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import { navTitles } from '../../Constants/staticConstants'

function NavigationBar() {
    return (
        <Card className="nav_main">
            <CardContent className='nav_container'>
                <div>
                    <TwitterIcon />
                </div>
                <div className='action_area'>
                    {navTitles.map((e, index) => (
                        <Link to={e.link} key={index} style={{ textDecoration: "none", marginRight: "1%", color: "white" }}>
                            <h1 className='nav_title'> {e.title} </h1>
                        </Link>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default NavigationBar