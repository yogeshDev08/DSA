import React from 'react';
import LeftMenuCard from "../LeftMenuCard"
import MainTweeterFeed from "./MainFeed"
import RightProfileCard from '../RightProfileCard'
import '../../AppCss/rootLevel.css'

function MainPage() {
    return (
        <div className="main_page">
            <LeftMenuCard />
            <MainTweeterFeed />
            <RightProfileCard />
        </div>
    )

}

export default MainPage