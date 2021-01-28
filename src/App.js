import { ROUTES_MAIN, ROUTES_SUB } from './configs/routes';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Fragment, Suspense, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Loading from './components/Loading/Loading';
import { Main, Sub } from './HOC';
import './App.scss';

function App() {

    useEffect(() => {
        scroll.scrollTo('carousel');
    }, []);

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
            <Loading />
            <BrowserRouter>
                <Suspense fallback={<div></div>}>
                    <Switch>
                        {generateRoutes()}
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;