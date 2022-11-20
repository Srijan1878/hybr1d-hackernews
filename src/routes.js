import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom";
import { withSuspense } from "./hoc/withSuspense.js";

const Home = withSuspense(lazy(() => import('./pages/home/Home')))
const Details = withSuspense(lazy(() => import('./pages/Details/Details')))
const NotFound = withSuspense(lazy(() => import('./pages/NotFound/NotFound')))

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/:objectID',
        element: <Details />
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default routes