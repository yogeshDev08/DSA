// ** React Imports
import { Suspense, lazy } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

// ** Redux Imports
import { store } from "./redux/store"
import { Provider } from "react-redux"

// Toast Messages
import { Toaster } from "react-hot-toast"
import './AppCss/react-hot-toast.css'

// ** Spinner (Splash Screen)
import { CircularProgress } from "@mui/material"

import { StyledEngineProvider } from '@mui/material/styles';

// ** Lazy load app
const LazyApp = lazy(() => import("./App"))

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <StyledEngineProvider>
        <Suspense fallback={<CircularProgress />}>
          <LazyApp />
          <Toaster
            position={"top-right"}
            toastOptions={{ className: "react-hot-toast" }}
          />
        </Suspense>
      </StyledEngineProvider>
    </Provider>
  </BrowserRouter>
)
