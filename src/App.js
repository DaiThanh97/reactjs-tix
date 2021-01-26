import { ROUTES_MAIN, ROUTES_SUB } from './configs/routes';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import './App.scss';
// import Loading from './components/Loading/Loading';
import { Main, Sub } from './HOC';

function App() {

    const generateRoutes = () => {
        let listRoute = [];
        const main = ROUTES_MAIN.map((route, index) => {
            return <Main {...route} key={index} />
        });

        const sub = ROUTES_SUB.map((route, index) => {
            return <Sub {...route} key={index} />
        });

        listRoute.push([main, sub]);
        return listRoute;
    }

    return (
        <Fragment>
            <BrowserRouter>
                {/* <Loading /> */}
                <Switch>
                    {generateRoutes()}
                </Switch>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;