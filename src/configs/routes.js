import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import Register from "../pages/Register/Register";

export const ROUTES = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/detail',
        exact: false,
        component: MovieDetail
    },
]

export const ROUTES_LOGIN = [
    {
        path: '/login',
        exact: true,
        component: LogIn
    },
    {
        path: '/register',
        exact: true,
        component: Register
    },
]