import { ROUTES } from './configs/routes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {

    const generateRoutes = () => {
        return ROUTES.map((route, index) => {
            return <Route {...route} key={index} />
        })
    }

    return (
        <Fragment>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    {generateRoutes()}
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
