import React, { Suspense } from "react";
import Router from "./Router/Router";
import { CircularProgress } from "@mui/material"
import NavigationBar from './Components/NavBar/NavigationBar'
import "./AppCss/profile.css"
import './AppCss/rightcard.css'

function App() {
  return (
    <Suspense fallback={<CircularProgress/>}>
      <NavigationBar />
      <Router />
    </Suspense>
  );
}

export default App;
