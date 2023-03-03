import React, { Suspense } from "react";
import Router from "./Router/Router";
import { CircularProgress } from "@mui/material"

function App() {
  return (
    <Suspense fallback={<CircularProgress/>}>
      <Router />
    </Suspense>
  );
}

export default App;
