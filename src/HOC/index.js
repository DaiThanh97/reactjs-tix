import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export function Main(props) {
    return (
        <Fragment>
            <Header />
            <Route {...props} />
            <Footer />
        </Fragment>
    )
}

export function Sub(props) {
    return (
        <Fragment>
            <Route {...props} />
        </Fragment>
    )
}