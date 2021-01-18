import { ROUTES, ROUTES_LOGIN } from './configs/routes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import { Main, LogIn } from './templates/main'
import './App.css';
import Loading from './components/Loading/Loading';

function App() {

    const generateRoutes = () => {
        return ROUTES.map((route, index) => {
            return <Main {...route} key={index} />
        })
    }

    const generateRoutesLogin = () => {
        return ROUTES_LOGIN.map((route, index) => {
            return <LogIn {...route} key={index} />
        })
    }

    return (
        <Fragment>
            <BrowserRouter>
                <Loading />
                <Switch>
                    {generateRoutes()}
                    {generateRoutesLogin()}
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
