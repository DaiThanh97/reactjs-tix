import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

export function Main(props) {
    return (
        <Fragment>
            <NavBar />
            <Route {...props} />
            <Footer />
        </Fragment>
    )
}

export function LogIn(props) {
    return (
        <Fragment>
            <Route {...props} />
        </Fragment>
    )
}