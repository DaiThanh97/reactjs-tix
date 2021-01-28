import React from 'react';
const Home = React.lazy(() => import("../pages/Home/Home"));
const LogIn = React.lazy(() => import("../pages/LogIn/LogIn"));
const Register = React.lazy(() => import("../pages/Register/Register"));
const MovieDetail = React.lazy(() => import("../pages/MovieDetail/MovieDetail"));
const Checkout = React.lazy(() => import("../pages/Checkout/Checkout"));

export const ROUTES_MAIN = [
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

export const ROUTES_SUB = [
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
    {
        path: '/checkout/(:id)?',
        exact: true,
        component: Checkout
    },
]