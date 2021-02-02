import { ROUTES_MAIN, ROUTES_SUB } from './configs/routes';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Fragment, Suspense } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Loading from './components/Loading/Loading';
import { Main, Sub } from './HOC';
import './App.scss';
import Trailer from './components/Trailer/Trailer';

function App() {
    scroll.scrollTo('carousel');
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
                <Suspense fallback={<Loading />}>
                    <Loading />
                    <Switch>
                        {generateRoutes()}
                    </Switch>
                </Suspense>
            </BrowserRouter>
            <Trailer />
        </Fragment>
    );
}

export default App;