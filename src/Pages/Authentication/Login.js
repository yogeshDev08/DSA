import '../../AppCss/login.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardHeader } from '@mui/material';
import loginBackground from '../../Assests/Images/login2.jpg'
import LoginForm from './LoginForm'
import HomePage from '../../Components/MainFeed/MainFeed';

function Login() {
    return (
        <Card className="main" style={{ backgroundImage: {loginBackground}}}>
            <CardContent className='action_area'>
                <h1 className='nav_title'> Home </h1>
                <h1 className='nav_title'> Main Feed </h1>
                <h1 className='nav_title'> Profile </h1>
            </CardContent>
            <HomePage/>
        </Card>
    )
}

export default Login